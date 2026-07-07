import { isCorporateEmail } from '../corporate-email'

export type ContactFormData = {
  nombre: string
  telefono: string
  correo: string
  conversaciones: string
  industria: string
  otraIndustria: string
  objetivos: string
}

export const CONVERSATION_OPTIONS = [
  'Menos de 1,500',
  '1,500 - 2,000',
  '2,000 - 10,000',
  '10,000 - 50,000',
  '50.000+',
] as const

export const CALENDAR_ELIGIBLE_INDUSTRIES = [
  'Ecommerce/Retail',
  'Automotriz',
  'Salud',
  'Educación',
  'Turismo/Hotelería',
] as const

export const INDUSTRY_OTHER_LABEL = 'Otra Industria'

export const INDUSTRY_OPTIONS = [
  ...CALENDAR_ELIGIBLE_INDUSTRIES,
  INDUSTRY_OTHER_LABEL,
] as const

const HIGH_VOLUME_CONVERSATION_OPTIONS = new Set<string>([
  '2,000 - 10,000',
  '10,000 - 50,000',
  '50.000+',
])

export const HUBSPOT_CONTACT_PORTAL_ID = '23480943'
export const HUBSPOT_CONTACT_FORM_ID = '6fca809e-de67-4c44-b5d7-c38bdda50427'

export const HUBSPOT_FIELD = {
  firstname: 'firstname',
  email: 'email',
  phone: 'phone',
  desafio: 'cul_es_tu_desafo_de_servicio_al_cliente',
  conversaciones: 'cuantas_conversaciones_maneja_tu_empresa_mensualmente_',
  industria: 'industria',
  otraIndustria: 'otra_industria',
  confirmo: 'confirmo_asistencia',
} as const

export { isCorporateEmail, isValidEmailFormat as isValidEmail } from '../corporate-email'

export function hasHighVolumeConversations(conversaciones: string) {
  return HIGH_VOLUME_CONVERSATION_OPTIONS.has(conversaciones)
}

export function isCalendarEligibleIndustry(industria: string) {
  return (CALENDAR_ELIGIBLE_INDUSTRIES as readonly string[]).includes(industria)
}

export function shouldRedirectToCalendar(data: Pick<ContactFormData, 'conversaciones' | 'industria'>) {
  return (
    hasHighVolumeConversations(data.conversaciones) &&
    isCalendarEligibleIndustry(data.industria)
  )
}

export function validateContactFormData(data: unknown): data is ContactFormData {
  if (!data || typeof data !== 'object') return false
  const d = data as Record<string, unknown>
  const industria = d.industria
  const otraIndustriaValid =
    industria !== INDUSTRY_OTHER_LABEL ||
    (typeof d.otraIndustria === 'string' && d.otraIndustria.trim().length > 2)

  return (
    typeof d.nombre === 'string' &&
    d.nombre.trim().length > 1 &&
    typeof d.correo === 'string' &&
    isCorporateEmail(d.correo) &&
    typeof d.telefono === 'string' &&
    d.telefono.trim().length > 5 &&
    typeof d.conversaciones === 'string' &&
    (CONVERSATION_OPTIONS as readonly string[]).includes(d.conversaciones) &&
    typeof industria === 'string' &&
    (INDUSTRY_OPTIONS as readonly string[]).includes(industria) &&
    otraIndustriaValid &&
    typeof d.objetivos === 'string' &&
    d.objetivos.trim().length > 2 &&
    typeof d.otraIndustria === 'string'
  )
}
