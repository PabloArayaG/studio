import { motion } from 'framer-motion';
import bgFinal from '../../assets/bg-finalcard.webp';

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const, delay },
  }),
};

export const CtaFinalSection = () => {
  return (
    <section className="bg-[#0C0C0D] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <motion.div
          className="relative overflow-hidden rounded-[10px] border border-white/10 p-8 md:p-16 min-h-[280px] md:min-h-[320px] flex flex-col justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={0}
        >
          <div className="absolute inset-0 z-0">
            <img src={bgFinal} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          <div className="relative z-10 max-w-[700px]">
            <h2
              className="text-[26px] md:text-[36px] font-semibold text-white leading-[1.2] mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Estás a un paso de la
              <br />
              <span className="text-[#FFD540]">automatización</span>
            </h2>

            <p
              className="text-[16px] font-normal text-[#CCCCCC] leading-relaxed mb-8"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              Agenda una demo y vive la experiencia de gestionar a tus clientes con Adereso.
              <br />
              Completa el formulario y nos comunicaremos contigo.
            </p>

            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#FFD540] hover:bg-[#FFE37A] text-black text-[16px] font-medium rounded-full transition-all duration-200"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Hablar con un experto
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
