import { Suspense, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MarketingFooter } from '../components/marketing/MarketingFooter'
import { MarketingNavbar } from '../components/marketing/MarketingNavbar'

const font = 'font-[family-name:var(--font-outfit)]'
const MEETINGS_BASE_URL =
  'https://meetings.hubspot.com/juan-carlos-rodriguez-fijo/reunion-inbound-adri'
const MEETINGS_SCRIPT_SRC =
  'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'

function CalendarLoadingFallback() {
  return (
    <div
      className="flex min-h-[620px] items-center justify-center text-sm"
      style={{ color: 'rgba(255,255,255,0.45)' }}
    >
      Cargando calendario…
    </div>
  )
}

function MeetingEmbed() {
  const [searchParams] = useSearchParams()

  const meetingSrc = useMemo(() => {
    const params = new URLSearchParams({ embed: 'true' })
    const firstname = searchParams.get('firstname')
    const lastname = searchParams.get('lastname')
    const email = searchParams.get('email')

    if (firstname) params.set('firstname', firstname)
    if (lastname) params.set('lastname', lastname)
    if (email) params.set('email', email)

    return `${MEETINGS_BASE_URL}?${params}`
  }, [searchParams])

  useEffect(() => {
    const scriptId = 'hubspot-meetings-embed-script'
    const existing = document.getElementById(scriptId)

    if (existing) {
      existing.remove()
    }

    const script = document.createElement('script')
    script.id = scriptId
    script.src = MEETINGS_SCRIPT_SRC
    script.type = 'text/javascript'
    script.async = true
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [meetingSrc])

  return (
    <div
      className="meetings-iframe-container min-h-[620px] w-full"
      style={{ minHeight: '620px', width: '100%' }}
      data-src={meetingSrc}
    />
  )
}

function AgendarSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section className="w-full" style={{ backgroundColor: '#0C0C0D' }}>
      <div className="mx-auto max-w-[900px] px-6 pb-16 pt-24 text-center md:px-10 md:pb-20 md:pt-32">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition:
              'opacity 0.7s cubic-bezier(0.2,0.8,0.2,1), transform 0.7s cubic-bezier(0.2,0.8,0.2,1)',
          }}
        >
          <h1 className={`mb-4 text-2xl font-bold leading-tight sm:text-[2rem] md:text-4xl ${font}`}>
            <span style={{ color: '#FFD540' }}>Agenda tu reunión</span>
            <br />
            <span className="text-white">con un experto de Adereso</span>
          </h1>
          <p
            className="mb-10 text-base md:text-lg"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Elige el horario que mejor te acomode. Te ayudaremos a evaluar cómo escalar tu
            operación conversacional.
          </p>
        </div>

        <div
          className="overflow-hidden rounded-[18px] border p-4 md:p-6"
          style={{
            backgroundColor: 'rgba(19, 20, 21, 0.85)',
            borderColor: 'rgba(255,255,255,0.1)',
          }}
        >
          <Suspense fallback={<CalendarLoadingFallback />}>
            <MeetingEmbed />
          </Suspense>
        </div>
      </div>
    </section>
  )
}

function useAgendarPageSeo() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Agenda tu reunión | Adereso'

    let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null
    const hadRobotsMeta = Boolean(robotsMeta)
    const previousRobotsContent = robotsMeta?.getAttribute('content') ?? null

    if (!robotsMeta) {
      robotsMeta = document.createElement('meta')
      robotsMeta.setAttribute('name', 'robots')
      document.head.appendChild(robotsMeta)
    }

    robotsMeta.setAttribute('content', 'noindex, nofollow')

    return () => {
      document.title = previousTitle

      if (hadRobotsMeta && robotsMeta) {
        if (previousRobotsContent) {
          robotsMeta.setAttribute('content', previousRobotsContent)
        } else {
          robotsMeta.removeAttribute('content')
        }
      } else if (robotsMeta) {
        robotsMeta.remove()
      }
    }
  }, [])
}

export default function ScheduleMeeting() {
  useAgendarPageSeo()

  return (
    <div className="min-h-screen bg-[#0C0C0D]">
      <MarketingNavbar />
      <main>
        <AgendarSection />
      </main>
      <MarketingFooter />
    </div>
  )
}
