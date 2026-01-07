import { useId, useState } from 'react'
import './FAQ.css'

type FaqItem = {
  question: string
  answer: string
}

const FAQ = () => {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FaqItem[] = [
    {
      question: '¿En qué consiste el proceso de implementación?',
      answer:
        'Implementar Adereso AI para automatizar ventas y soporte por WhatsApp toma entre 2-4 semanas y no requiere equipo técnico interno. Partimos definiendo objetivos claros basados en tus desafíos específicos y establecemos KPIs medibles en conjunto para garantizar resultados tangibles. Desde ahí, nuestro equipo de servicios profesionales se encarga de conectar WhatsApp Business API, integrar nativamente con Shopify, HubSpot, Salesforce o tu CRM actual, y entrenar el agente con tu base de conocimiento, catálogo de productos y flujos conversacionales específicos de tu negocio. Realizamos pruebas controladas, refinamos respuestas según feedback real, capacitamos a tu equipo en el uso de la plataforma, y lanzamos en producción con acompañamiento continuo. A diferencia de plataformas DIY donde quedas solo después de contratar, incluimos reuniones periódicas de optimización y monitoreo para que el agente evolucione y mejore con cada conversación.',
    },
    {
      question: '¿Con qué sistemas se integra Adereso AI?',
      answer:
        'Adereso AI se integra nativamente con las plataformas más utilizadas: Salesforce, HubSpot y Shopify, permitiendo que tus conversaciones automatizadas se sincronicen directamente con tu CRM y ecommerce sin necesidad de desarrollos adicionales. Además, nuestro equipo técnico puede desarrollar integraciones custom con cualquier sistema o herramienta que utilices actualmente, asegurando que la solución se conecte perfectamente con tu stack tecnológico existente sin interrumpir tus operaciones.',
    },
    {
      question: '¿En qué canales funciona Adereso AI?',
      answer:
        'Adereso AI centraliza y automatiza conversaciones en todos los canales donde tus clientes te buscan: WhatsApp Business API, Instagram, Facebook Messenger, Twitter (X), LinkedIn, Webchat y correo electrónico. Esto te permite gestionar todas las interacciones desde una sola plataforma, manteniendo el contexto completo del cliente sin importar por dónde te contacte, y asegurando que tu equipo no tenga que saltar entre múltiples herramientas para dar seguimiento.',
    },
    {
      question: '¿Qué pasa cuando el bot no puede resolver una consulta?',
      answer:
        'A diferencia de otras plataformas donde el cliente debe reiniciar la conversación, en Adereso AI el bot deriva la consulta dentro del mismo chat directamente al departamento o ejecutivo específico que puede resolverla. El cliente no tiene que repetir su duda y el agente humano recibe todo el contexto de la conversación automáticamente, eliminando la frustración del típico "cuénteme nuevamente su problema" acelerando así la resolución.',
    },
    {
      question: '¿Cómo funciona el modelo de pricing?',
      answer:
        'Cobramos por conversación, no por usuario. Esto significa que puedes agregar todos los agentes que necesites a la plataforma sin incrementar costos, permitiéndote escalar tu equipo de atención libremente conforme crece tu operación. Sin límites artificiales ni sorpresas en la factura cuando necesites sumar más personas al sistema.',
    },
    {
      question: '¿Los agentes de IA van a reemplazar a mi equipo de soporte?',
      answer:
        'No. Adereso AI está diseñado para potenciar a tu equipo, no reemplazarlo. La IA automatiza consultas repetitivas (horarios, tracking, políticas, FAQs) que actualmente consumen 60-70% del tiempo de tus agentes, liberándolos para enfocarse en casos complejos, ventas consultivas y situaciones que requieren empatía humana. En promedio, nuestros clientes logran que sus equipos de soporte dediquen 3x más tiempo a conversaciones de alto valor, reduciendo burnout y aumentando satisfacción laboral. El resultado: mejor atención, no menos personas.',
    },
    {
      question:
        '¿Los agentes de IA para WhatsApp realmente mejoran las ventas o solo automatizan soporte?',
      answer:
        'Los agentes de IA para WhatsApp no solo automatizan soporte—son herramientas de venta directa que cierran negocios en tiempo real. Cuando un cliente potencial te contacta por WhatsApp con dudas sobre un producto, el agente de IA puede resolver todas sus objeciones al instante, recomendar productos complementarios basándose en lo que está consultando, y enviar directamente el link de pago o checkout de tu ecommerce para cerrar la venta en el momento. Además, el agente puede recuperar carritos abandonados, hacer upselling inteligente durante la conversación, y reactivar leads que consultaron antes pero no compraron, convirtiendo WhatsApp en tu canal de ventas más efectivo sin ampliar tu equipo.',
    },
    {
      question: '¿Qué significa que Adereso AI sea WhatsApp Business Partner oficial?',
      answer:
        'Adereso AI es WhatsApp Business Solution Provider oficial, lo que significa que estamos certificados y autorizados directamente por Meta para conectar empresas con la API de WhatsApp Business. Esto te garantiza acceso confiable y cumplimiento de todas las políticas de WhatsApp, sin riesgo de suspensiones o bloqueos que pueden sufrir soluciones no autorizadas. Como partner oficial, gestionamos todo el proceso de verificación y aprobación de tu cuenta de WhatsApp Business API, que es el requisito técnico para automatizar conversaciones a escala profesional. A diferencia de la app WhatsApp Business estándar que solo permite un dispositivo y tiene funcionalidades limitadas. La API te permite conectar múltiples agentes simultáneamente, automatizar con agentes de IA, integrar con tus sistemas (CRM, ecommerce), enviar notificaciones transaccionales, y centralizar todos tus canales de atención en una sola plataforma, todo con el respaldo y soporte técnico directo de un partner certificado.',
    },
  ]

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section className="faq">
      <div className="faq-container">
        <div className="faq-header">
          <div className="faq-badge">FAQ</div>
          <h2 className="faq-title">Preguntas frecuentes</h2>
          <p className="faq-subtitle">
            Todo lo que necesitas para entender implementación, integraciones y operación.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index
            const buttonId = `${baseId}-btn-${index}`
            const panelId = `${baseId}-panel-${index}`

            return (
              <div key={index} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  id={buttonId}
                  className="faq-question"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    <span className="faq-icon-line" />
                    <span className="faq-icon-line faq-icon-line--vertical" />
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="faq-answer"
                  style={{ maxHeight: isOpen ? 560 : 0 }}
                >
                  <div className="faq-answer-inner">{item.answer}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
