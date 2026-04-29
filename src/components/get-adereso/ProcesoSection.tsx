import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const, delay },
  }),
};

const steps = [
  {
    number: '01',
    category: 'Diseño',
    title: 'Diseñamos tu agente de IA juntos',
    description:
      'Entendemos tu operación, reglas de negocio y tono de marca. Configuramos un agente a tu medida, no con plantillas genéricas.',
    image: 'https://adereso.ai/wp-content/uploads/2026/04/disenamos-tu-agente.jpeg',
  },
  {
    number: '02',
    category: 'Pruebas',
    title: 'Pruebas y ajustas hasta quedar conforme',
    description:
      'Probamos con casos reales antes de salir en vivo. Iteramos juntos hasta que respuestas, flujos y derivaciones funcionen como necesitas.',
    image: 'https://adereso.ai/wp-content/uploads/2026/04/pruebas-y-ajustes.jpeg',
  },
  {
    number: '03',
    category: 'Optimización',
    title: 'Lo activas y seguimos optimizando',
    description:
      'Despliegas en tus canales y te acompañamos mes a mes: métricas, ajustes de respuestas y mejoras continuas.',
    image: 'https://adereso.ai/wp-content/uploads/2026/04/plan-rendimiento.jpeg',
  },
];

export const ProcesoSection = () => {
  return (
    <section className="bg-[#0C0C0D] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">

        <motion.div
          className="flex justify-center mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={0}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#131415] border border-white/[0.08] text-[13px] font-medium text-[#A3A3A3]"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#FFD540]" />
            Proceso
          </span>
        </motion.div>

        <motion.h2
          className="text-[26px] md:text-[36px] font-semibold leading-[1.2] text-white text-center mb-10 md:mb-14"
          style={{ fontFamily: "'Outfit', sans-serif" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={0.1}
        >
          Cómo funciona
        </motion.h2>

        <div className="flex flex-col gap-10 md:gap-20">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={`flex flex-col md:flex-row md:items-center md:gap-16 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={0.1 + i * 0.05}
            >
              <div className="md:w-[55%] flex-shrink-0 mb-5 md:mb-0">
                <div className="rounded-[20px] overflow-hidden w-full">
                  <img src={step.image} alt={step.title} className="w-full h-auto object-cover" />
                </div>
              </div>

              <div className="md:w-[45%]">
                <div
                  className="flex items-center gap-3 mb-3"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <span className="text-[13px] font-medium text-[#FFD540]">{step.number}</span>
                  <span className="w-6 h-px bg-white/20" />
                  <span className="text-[11px] font-medium text-[#A3A3A3] tracking-[1.5px] uppercase">
                    {step.category}
                  </span>
                </div>
                <h3
                  className="text-[17px] md:text-[22px] font-medium text-white mb-3 leading-[1.3]"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[14px] md:text-[16px] font-normal text-[#777777] leading-[1.6]"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
