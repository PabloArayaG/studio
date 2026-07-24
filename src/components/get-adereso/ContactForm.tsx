import { useCallback, useEffect, useId, useRef, useState } from 'react'
import {
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  IconChevronDown,
} from '@tabler/icons-react'
import {
  CONVERSATION_OPTIONS,
  INDUSTRY_OPTIONS,
  INDUSTRY_OTHER_LABEL,
  type ContactFormData,
  shouldRedirectToCalendar,
} from '../../lib/hubspot/contact-form'
import {
  CORPORATE_EMAIL_ERROR_MESSAGE,
  isCorporateEmail,
  isValidEmailFormat,
} from '../../lib/corporate-email'

const TOTAL_STEPS = 2
const font = 'font-[family-name:var(--font-outfit)]'
const FORM_STEP_MIN_H = 'min-h-[280px]'
const CARD_SHELL =
  'rounded-[18px] p-5 md:p-6 w-full max-w-[440px] lg:max-w-none mx-auto lg:mx-0'
const CARD_STYLE = {
  backgroundColor: 'rgba(19, 20, 21, 0.85)',
  border: '1px solid rgba(255,255,255,0.1)',
  backdropFilter: 'blur(16px)',
} as const

const INPUT_BASE =
  'w-full px-3.5 py-2.5 rounded-[10px] text-sm text-white placeholder:text-white/30 outline-none transition-all'
const INPUT_STYLE = {
  backgroundColor: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)',
} as const

const EMPTY_FORM: ContactFormData = {
  nombre: '',
  telefono: '',
  correo: '',
  conversaciones: '',
  industria: '',
  otraIndustria: '',
  objetivos: '',
}

const THANK_YOU_URL =
  'https://adereso.ai/thank-you-page/?utm_source=Website&utm_medium=Contacto&utm_campaign=Formulario'

type CustomDropdownProps = {
  label: string
  value: string
  options: readonly string[]
  onChange: (value: string) => void
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}

function CustomDropdown({
  label,
  value,
  options,
  onChange,
  isOpen,
  onToggle,
  onClose,
}: CustomDropdownProps) {
  const listId = useId()
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const handleOutside = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [isOpen, onClose])

  return (
    <div ref={rootRef} className={`relative ${isOpen ? 'z-30' : ''}`}>
      <label
        className={`block text-sm text-white/80 mb-1.5 ${font}`}
        style={{ fontFamily: "'Work Sans', sans-serif" }}
      >
        {label}
      </label>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={listId}
        onClick={onToggle}
        className={`${INPUT_BASE} flex items-center justify-between text-left`}
        style={INPUT_STYLE}
      >
        <span className={value ? 'text-white' : 'text-white/30'}>
          {value || 'Selecciona'}
        </span>
        <IconChevronDown
          size={18}
          className={`text-white/40 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <ul
          id={listId}
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%+4px)] z-[100] rounded-[10px] overflow-hidden shadow-lg"
          style={{ backgroundColor: '#1a1b1c', border: '1px solid rgba(255,255,255,0.12)' }}
        >
          {options.map((opt) => (
            <li key={opt} role="option" aria-selected={value === opt}>
              <button
                type="button"
                className="w-full text-left px-3.5 py-2.5 text-sm text-white hover:bg-[rgba(255,213,64,0.08)] transition-colors"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  backgroundColor:
                    value === opt ? 'rgba(255,213,64,0.08)' : 'transparent',
                  borderLeft:
                    value === opt ? '2px solid rgba(255,213,64,0.45)' : '2px solid transparent',
                }}
                onClick={() => {
                  onChange(opt)
                  onClose()
                }}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function ContactForm() {
  const [step, setStep] = useState(1)
  const [animKey, setAnimKey] = useState(0)
  const [heroOn, setHeroOn] = useState(false)
  const [form, setForm] = useState<ContactFormData>(EMPTY_FORM)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [openDropdown, setOpenDropdown] = useState<'conversaciones' | 'industria' | null>(
    null,
  )

  const nombreRef = useRef<HTMLInputElement>(null)
  const objetivosRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setHeroOn(true), 80)
    return () => clearTimeout(t)
  }, [])

  const focusFirstField = useCallback((currentStep: number) => {
    setTimeout(() => {
      if (currentStep === 1) nombreRef.current?.focus()
    }, 360)
  }, [])

  const isStep2Valid = useCallback(() => {
    const industryValid =
      form.industria !== '' &&
      (form.industria !== INDUSTRY_OTHER_LABEL || form.otraIndustria.trim().length > 2)

    return (
      form.conversaciones !== '' &&
      industryValid &&
      form.objetivos.trim().length > 2
    )
  }, [form])

  const emailLooksComplete = isValidEmailFormat(form.correo)
  const emailIsCorporate = isCorporateEmail(form.correo)
  const showCorporateEmailError =
    form.correo.trim().length > 0 && emailLooksComplete && !emailIsCorporate

  const canAdvance = useCallback(() => {
    if (step === 1) {
      return (
        form.nombre.trim().length > 1 &&
        isCorporateEmail(form.correo) &&
        form.telefono.trim().length > 5
      )
    }
    return isStep2Valid()
  }, [step, form, isStep2Valid])

  const goNext = useCallback(() => {
    if (!canAdvance()) return
    if (step < TOTAL_STEPS) {
      const next = step + 1
      setStep(next)
      setAnimKey((k) => k + 1)
      focusFirstField(next)
    }
  }, [canAdvance, step, focusFirstField])

  const goBack = () => {
    if (step > 1) {
      const prev = step - 1
      setStep(prev)
      setAnimKey((k) => k + 1)
      setOpenDropdown(null)
      focusFirstField(prev)
    }
  }

  const handleSubmit = async () => {
    if (!canAdvance() || submitting) return
    setSubmitting(true)
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          pageUri: window.location.href,
        }),
      })

      const json = await res.json().catch(() => ({}))

      if (!res.ok) {
        setError(
          json.message || 'No se pudo enviar. Revisa tu conexión e intenta de nuevo.',
        )
        return
      }

      const nameParts = form.nombre.trim().split(/\s+/)
      const firstName = nameParts[0] ?? ''
      const lastName = nameParts.slice(1).join(' ')

      ;(window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer =
        (window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer || []
      ;(window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer!.push({
        event: 'hubspot_form_submit',
        formSource: 'lp-adereso',
        userEmail: form.correo,
        userPhone: form.telefono,
        userFirstName: firstName,
        userLastName: lastName,
      })

      if (shouldRedirectToCalendar(form)) {
        const params = new URLSearchParams()
        if (firstName) params.set('firstname', firstName)
        if (lastName) params.set('lastname', lastName)
        params.set('email', form.correo.trim())
        window.location.replace(`/agendar?${params}`)
      } else {
        window.location.replace(THANK_YOU_URL)
      }
    } catch {
      setError('No se pudo enviar. Revisa tu conexión e intenta de nuevo.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'Enter' || e.target instanceof HTMLTextAreaElement) return
    e.preventDefault()
    if (step < TOTAL_STEPS) goNext()
    else if (canAdvance() && !submitting) handleSubmit()
  }

  const inputFocusHandlers = {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.currentTarget.style.borderColor = 'rgba(255,213,64,0.45)'
      e.currentTarget.style.boxShadow =
        '0 0 0 1px rgba(255,213,64,0.3), 0 0 0 4px rgba(255,213,64,0.08)'
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
      e.currentTarget.style.boxShadow = 'none'
    },
  }

  return (
    <div
      className={`hero-in ${heroOn ? 'on' : ''} ${CARD_SHELL}`}
      style={CARD_STYLE}
      onKeyDown={handleKeyDown}
    >
      <div className="mb-5">
        <h3
          className={`text-lg md:text-xl font-semibold text-white mb-1 ${font}`}
        >
          Hablar con un experto
        </h3>
        <p
          className="text-sm mb-4"
          style={{ color: '#FFD540', fontFamily: "'Work Sans', sans-serif" }}
        >
          Solo para marcas con +2.000 conversaciones mensuales
        </p>
        <p
          className="text-[11px] uppercase tracking-widest mb-2"
          style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'Outfit', sans-serif" }}
        >
          Paso {step} de {TOTAL_STEPS}
        </p>
        <div className="flex gap-1.5">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div
              key={i}
              className="h-1 rounded-full flex-1 transition-all duration-500"
              style={{
                backgroundColor:
                  i < step ? '#FFD540' : 'rgba(255,255,255,0.12)',
                boxShadow:
                  i < step ? '0 0 6px rgba(255,213,64,0.4)' : 'none',
                transitionTimingFunction: 'cubic-bezier(0.2,0.8,0.2,1)',
              }}
            />
          ))}
        </div>
      </div>

      <div className={`relative z-20 ${FORM_STEP_MIN_H}`}>
        <div key={animKey} className="step-enter flex flex-col gap-3">
          {step === 1 && (
            <>
              <p
                className="text-sm mb-1"
                style={{
                  color: 'rgba(255,255,255,0.45)',
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                Cuéntanos sobre ti
              </p>
              <div>
                <label className={`block text-sm text-white/80 mb-1.5 ${font}`}>
                  Nombre completo
                </label>
                <input
                  ref={nombreRef}
                  type="text"
                  autoComplete="name"
                  placeholder="Ej: María González"
                  className={INPUT_BASE}
                  style={INPUT_STYLE}
                  value={form.nombre}
                  onChange={(e) => setForm((f) => ({ ...f, nombre: e.target.value }))}
                  {...inputFocusHandlers}
                />
              </div>
              <div>
                <label className={`block text-sm text-white/80 mb-1.5 ${font}`}>
                  Correo corporativo
                </label>
                <input
                  type="email"
                  autoComplete="email"
                  placeholder="Ej: maria@empresa.com"
                  className={INPUT_BASE}
                  style={{
                    ...INPUT_STYLE,
                    borderColor: showCorporateEmailError
                      ? 'rgba(255,64,64,0.55)'
                      : INPUT_STYLE.border,
                  }}
                  value={form.correo}
                  onChange={(e) => setForm((f) => ({ ...f, correo: e.target.value }))}
                  aria-invalid={showCorporateEmailError}
                  aria-describedby={showCorporateEmailError ? 'correo-error' : undefined}
                  {...inputFocusHandlers}
                />
                {showCorporateEmailError && (
                  <p
                    id="correo-error"
                    role="alert"
                    className="text-xs mt-1.5"
                    style={{ color: '#FF4040', fontFamily: "'Work Sans', sans-serif" }}
                  >
                    {CORPORATE_EMAIL_ERROR_MESSAGE}
                  </p>
                )}
              </div>
              <div>
                <label className={`block text-sm text-white/80 mb-1.5 ${font}`}>
                  Teléfono (con código de país)
                </label>
                <input
                  type="tel"
                  autoComplete="tel"
                  placeholder="Ej: +56 9 1234 5678"
                  className={INPUT_BASE}
                  style={INPUT_STYLE}
                  value={form.telefono}
                  onChange={(e) => setForm((f) => ({ ...f, telefono: e.target.value }))}
                  {...inputFocusHandlers}
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <CustomDropdown
                label="¿Cuántas conversaciones maneja tu empresa mensualmente?"
                value={form.conversaciones}
                options={CONVERSATION_OPTIONS}
                onChange={(v) => setForm((f) => ({ ...f, conversaciones: v }))}
                isOpen={openDropdown === 'conversaciones'}
                onToggle={() =>
                  setOpenDropdown((d) =>
                    d === 'conversaciones' ? null : 'conversaciones',
                  )
                }
                onClose={() => setOpenDropdown(null)}
              />
              <CustomDropdown
                label="Industria"
                value={form.industria}
                options={INDUSTRY_OPTIONS}
                onChange={(v) =>
                  setForm((f) => ({
                    ...f,
                    industria: v,
                    otraIndustria: v === INDUSTRY_OTHER_LABEL ? f.otraIndustria : '',
                  }))
                }
                isOpen={openDropdown === 'industria'}
                onToggle={() =>
                  setOpenDropdown((d) => (d === 'industria' ? null : 'industria'))
                }
                onClose={() => setOpenDropdown(null)}
              />
              {form.industria === INDUSTRY_OTHER_LABEL && (
                <div>
                  <label className={`block text-sm text-white/80 mb-1.5 ${font}`}>
                    ¿Cuál es tu industria?
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Logística, Finanzas, Construcción…"
                    className={INPUT_BASE}
                    style={INPUT_STYLE}
                    value={form.otraIndustria}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, otraIndustria: e.target.value }))
                    }
                    {...inputFocusHandlers}
                  />
                </div>
              )}
              <div>
                <label className={`block text-sm text-white/80 mb-1.5 ${font}`}>
                  ¿Qué buscas lograr con Adereso?
                </label>
                <textarea
                  ref={objetivosRef}
                  rows={2}
                  placeholder="Ej: Automatizar atención y ventas por WhatsApp…"
                  className={`${INPUT_BASE} resize-none`}
                  style={INPUT_STYLE}
                  value={form.objetivos}
                  onChange={(e) => setForm((f) => ({ ...f, objetivos: e.target.value }))}
                  {...inputFocusHandlers}
                />
              </div>
            </>
          )}
        </div>
      </div>

      {error && (
        <p className="text-sm mt-3" style={{ color: '#FF4040', fontFamily: "'Work Sans', sans-serif" }}>
          {error}
        </p>
      )}

      <p
        className="text-[11px] mt-4 leading-relaxed"
        style={{ color: 'rgba(255,255,255,0.28)', fontFamily: "'Work Sans', sans-serif" }}
      >
        Al enviar aceptas nuestra{' '}
        <a
          href="https://adereso.ai/politica-de-privacidad"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
          style={{ color: 'rgba(255,255,255,0.45)' }}
        >
          política de privacidad
        </a>
        .
      </p>

      <div
        className={`relative z-0 flex gap-3 mt-5 ${step === 1 ? '' : 'flex-row'}`}
      >
        {step > 1 && (
          <button
            type="button"
            onClick={goBack}
            disabled={submitting}
            className="inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-3 min-h-[44px] text-sm transition-colors"
            style={{
              color: 'rgba(255,255,255,0.55)',
              border: '1px solid rgba(255,255,255,0.12)',
              backgroundColor: 'rgba(255,255,255,0.04)',
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            <IconArrowLeft size={18} />
            Atrás
          </button>
        )}

        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={goNext}
            disabled={!canAdvance()}
            className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 min-h-[44px] text-sm font-medium transition-all disabled:opacity-40 ${step === 1 ? 'w-full' : 'flex-1'}`}
            style={{
              backgroundColor: '#FFD540',
              color: '#0C0C0D',
              boxShadow: '0 0 20px rgba(255,213,64,0.28)',
              fontFamily: "'Outfit', sans-serif",
            }}
            onMouseEnter={(e) => {
              if (!e.currentTarget.disabled) e.currentTarget.style.backgroundColor = '#FFE37A'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFD540'
            }}
          >
            Continuar
            <IconArrowRight size={18} />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canAdvance() || submitting}
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 min-h-[44px] text-sm font-medium transition-all disabled:opacity-40 flex-1"
            style={{
              backgroundColor: '#FFD540',
              color: '#0C0C0D',
              boxShadow: '0 0 20px rgba(255,213,64,0.28)',
              fontFamily: "'Outfit', sans-serif",
            }}
            onMouseEnter={(e) => {
              if (!e.currentTarget.disabled) e.currentTarget.style.backgroundColor = '#FFE37A'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFD540'
            }}
          >
            {submitting ? 'Enviando…' : 'Enviar'}
            {!submitting && <IconCheck size={18} />}
          </button>
        )}
      </div>
    </div>
  )
}
