import { useId, useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const, delay },
  }),
};

type FaqItem = {
  question: string;
  answer: string;
};

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
    question: '¿Los agentes de IA para WhatsApp realmente mejoran las ventas o solo automatizan soporte?',
    answer:
      'Los agentes de IA para WhatsApp no solo automatizan soporte—son herramientas de venta directa que cierran negocios en tiempo real. Cuando un cliente potencial te contacta por WhatsApp con dudas sobre un producto, el agente de IA puede resolver todas sus objeciones al instante, recomendar productos complementarios basándose en lo que está consultando, y enviar directamente el link de pago o checkout de tu ecommerce para cerrar la venta en el momento. Además, el agente puede recuperar carritos abandonados, hacer upselling inteligente durante la conversación, y reactivar leads que consultaron antes pero no compraron, convirtiendo WhatsApp en tu canal de ventas más efectivo sin ampliar tu equipo.',
  },
  {
    question: '¿Qué significa que Adereso AI sea WhatsApp Business Partner oficial?',
    answer:
      'Adereso AI es WhatsApp Business Solution Provider oficial, lo que significa que estamos certificados y autorizados directamente por Meta para conectar empresas con la API de WhatsApp Business. Esto te garantiza acceso confiable y cumplimiento de todas las políticas de WhatsApp, sin riesgo de suspensiones o bloqueos que pueden sufrir soluciones no autorizadas. Como partner oficial, gestionamos todo el proceso de verificación y aprobación de tu cuenta de WhatsApp Business API, que es el requisito técnico para automatizar conversaciones a escala profesional. A diferencia de la app WhatsApp Business estándar que solo permite un dispositivo y tiene funcionalidades limitadas. La API te permite conectar múltiples agentes simultáneamente, automatizar con agentes de IA, integrar con tus sistemas (CRM, ecommerce), enviar notificaciones transaccionales, y centralizar todos tus canales de atención en una sola plataforma, todo con el respaldo y soporte técnico directo de un partner certificado.',
  },
];

export const FaqSection = () => {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  useEffect(() => {
    const handleResize = () => {
      if (openIndex !== null && panelRefs.current[openIndex]) {
        const panel = panelRefs.current[openIndex];
        if (panel) panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [openIndex]);

  return (
    <section
      className="py-20 px-10 max-md:py-10 max-md:px-4"
      style={{ background: '#0C0C0D' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          className="text-left mb-8 max-w-[720px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={0}
        >
          <span
            className="inline-block px-4 py-2 rounded-[10px] border border-white/10 text-[13px] font-medium text-white tracking-[1px] mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            FAQ
          </span>
          <h2
            className="text-[26px] md:text-[36px] font-semibold text-white leading-[1.2] mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Preguntas frecuentes
          </h2>
          <p
            className="text-[16px] max-md:text-[15px] font-normal leading-[1.6]"
            style={{ fontFamily: "'Work Sans', sans-serif", color: 'rgba(255,255,255,0.7)' }}
          >
            Todo lo que necesitas para entender implementación, integraciones y operación.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-[14px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={0.15}
        >
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `${baseId}-btn-${index}`;
            const panelId = `${baseId}-panel-${index}`;

            return (
              <div
                key={index}
                className="rounded-[10px] border border-white/10 overflow-hidden transition-colors duration-200 hover:border-[#5a5a5a]"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                  className="w-full grid items-center p-[18px] max-md:p-4 bg-transparent border-0 cursor-pointer text-left"
                  style={{
                    gridTemplateColumns: '1fr 34px',
                    columnGap: 14,
                  }}
                >
                  <span
                    className="text-[17px] max-md:text-[16px] font-medium text-white leading-[1.35] min-w-0"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      overflowWrap: 'anywhere',
                    }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="w-[34px] h-[34px] max-md:w-[32px] max-md:h-[32px] rounded-[10px] border border-[#434343] relative grid place-items-center justify-self-end"
                    style={{ background: 'rgba(255,255,255,0.03)' }}
                    aria-hidden="true"
                  >
                    <span className="absolute w-[14px] h-[2px] bg-white rounded-sm" />
                    <span
                      className="absolute w-[2px] h-[14px] bg-white rounded-sm transition-transform duration-150 ease-out"
                      style={{ transform: isOpen ? 'scaleY(0)' : 'scaleY(1)' }}
                    />
                  </span>
                </button>

                <div
                  ref={(el) => { panelRefs.current[index] = el; }}
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="overflow-hidden transition-[max-height] duration-[250ms] ease-out"
                  style={{
                    maxHeight: isOpen
                      ? (panelRefs.current[index]?.scrollHeight ?? 560)
                      : 0,
                  }}
                >
                  <div
                    className="px-[18px] pb-[18px] max-md:px-4 max-md:pb-4"
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                      fontSize: 15,
                      lineHeight: 1.65,
                      color: 'rgba(255,255,255,0.72)',
                    }}
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
