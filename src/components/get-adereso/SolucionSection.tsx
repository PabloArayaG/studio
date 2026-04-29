import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const, delay },
  }),
};

const items = [
  {
    title: 'Recomienda productos y arma carritos',
    description:
      'Tu agente sugiere productos relevantes según lo que el cliente busca, le arma el carrito y lo envía directo al checkout.',
    image: 'https://adereso.ai/wp-content/uploads/2026/04/1.-venta-recomienda-productos.webp',
  },
  {
    title: 'Agenda citas automáticamente',
    description:
      'Desde una prueba de manejo hasta una consulta médica. Coordina horarios y confirma sin intervención humana.',
    image: 'https://adereso.ai/wp-content/uploads/2026/04/4.-venta-agenda-citas.webp',
  },
  {
    title: 'Califica leads antes de derivarlos',
    description:
      'Filtra y prioriza prospectos con IA en WhatsApp antes de pasarlos a tu equipo comercial.',
    image: 'https://adereso.ai/wp-content/uploads/2026/04/3.-venta-califica-leads.webp',
  },
  {
    title: 'Deriva al ejecutivo en el momento justo',
    description:
      'Cuando el cliente necesita atención humana, transfiere la conversación sin cortes, en el mismo chat.',
    image: 'https://adereso.ai/wp-content/uploads/2026/04/4.-post-venta-soporte-tecnico.webp',
  },
];

export const SolucionSection = () => {
  return (
    <section className="bg-[#0C0C0D] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">

        <motion.p
          className="text-[11px] font-medium text-[#A3A3A3] tracking-[2px] uppercase mb-5"
          style={{ fontFamily: "'Outfit', sans-serif" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={0}
        >
          La Solución
        </motion.p>

        <motion.h2
          className="text-[26px] md:text-[36px] font-semibold leading-[1.2] max-w-[600px] mb-10 md:mb-14"
          style={{ fontFamily: "'Outfit', sans-serif" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={0.1}
        >
          <span className="text-white">Vende y Atiende 24/7{' '}</span>
          <span className="text-[#666666]">con Inteligencia Artificial</span>
        </motion.h2>

        <div className="flex flex-col gap-10 md:gap-20">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className={`flex flex-col md:flex-row md:items-center md:gap-16 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={0.1 + i * 0.05}
            >
              <div className="md:w-1/2 md:max-w-[480px] flex-shrink-0 mb-5 md:mb-0">
                {item.image ? (
                  <div className="rounded-[20px] overflow-hidden w-full">
                    <img src={item.image} alt={item.title} className="w-full h-auto object-cover" />
                  </div>
                ) : (
                  <div className="bg-[#131415] border border-white/[0.06] rounded-[20px] w-full aspect-[4/3]" />
                )}
              </div>

              <div className="md:flex-1">
                <h3
                  className="text-[17px] md:text-[22px] font-medium text-white mb-3 leading-[1.3]"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[14px] md:text-[16px] font-normal text-[#777777] leading-[1.6] md:max-w-[420px]"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-center mt-12 md:mt-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={0.4}
        >
          <a
            href="#contacto"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#FFD540] hover:bg-[#FFE37A] text-black text-[16px] font-medium rounded-full transition-all duration-200 w-full sm:w-auto"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Hablar con un experto
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
