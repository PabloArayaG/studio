import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const, delay },
  }),
};

const problems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
      </svg>
    ),
    title: 'Tráfico calificado que se pierde',
    description: 'La demanda crece, pero las oportunidades se escapan porque nadie responde a tiempo.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1 -1 1h-3l-4 4l-4 -4h-5a1 1 0 0 1 -1 -1v-11a1 1 0 0 1 1 -1z" />
        <path d="M8 11h.01" />
        <path d="M12 11h.01" />
        <path d="M16 11h.01" />
      </svg>
    ),
    title: 'Chatbots que frustran en vez de ayudar',
    description: 'Probaste bots que confunden a tus clientes, no entienden lo que piden y no derivan bien a tus ejecutivos.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
        <path d="M10 10l4 4m0 -4l-4 4" />
      </svg>
    ),
    title: 'Tu proveedor te dejó solo',
    description: 'Te instalaron un bot y desaparecieron. Sin soporte, sin optimización, sin acompañamiento real.',
  },
];

export const ProblemSection = () => {
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
          El Problema
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
          <span className="text-white">No contestar a tiempo está{' '}</span>
          <span className="text-[#666666]">frenando tus ventas</span>
        </motion.h2>

        <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              className="bg-[#131415] border border-white/[0.06] rounded-[20px] p-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={0.2 + i * 0.1}
            >
              <div className="w-11 h-11 rounded-[12px] bg-[#FFD540]/10 flex items-center justify-center text-[#FFD540] mb-5">
                {item.icon}
              </div>
              <h3
                className="text-[17px] font-medium text-white mb-2 leading-[1.3]"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-[14px] font-normal text-[#777777] leading-[1.6]"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-center mt-10 md:mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={0.5}
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
