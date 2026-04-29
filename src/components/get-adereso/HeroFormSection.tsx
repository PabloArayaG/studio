import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const, delay },
  }),
};

export const HeroFormSection = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createForm = () => {
      if ((window as any).hbspt && !document.querySelector('#hero-hubspot-form iframe')) {
        (window as any).hbspt.forms.create({
          portalId: '23480943',
          formId: '6fca809e-de67-4c44-b5d7-c38bdda50427',
          region: 'na1',
          target: '#hero-hubspot-form',
        });
        return true;
      }
      return false;
    };

    if (createForm()) return;

    const existing = document.querySelector('script[src="//js.hsforms.net/forms/embed/v2.js"]');
    if (existing) {
      const interval = setInterval(() => {
        if (createForm()) clearInterval(interval);
      }, 200);
      return () => clearInterval(interval);
    }

    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => createForm();
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  const benefits = [
    'Implementación sin costo',
    '40% de descuento en plan anual',
    'Agentes IA y asientos ilimitados para tu equipo',
  ];

  return (
    <section id="contacto" className="bg-[#0C0C0D] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* Left – Copy */}
          <motion.div
            className="text-center md:text-left"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            custom={0}
          >
            <span
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#131415] border border-white/[0.08] text-[9px] font-medium text-[#A3A3A3] tracking-[1.5px] uppercase mb-6 whitespace-nowrap"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Solo para empresas con +2.000 conversaciones/mes
            </span>

            <h2
              className="text-[26px] md:text-[36px] font-semibold text-white leading-[1.2] mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Hablar con un experto
            </h2>

            <p
              className="hidden md:block text-[15px] md:text-[16px] text-[#777777] leading-[1.6] mb-8"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              Descubra cómo Adereso puede transformar la comunicación con sus clientes.
            </p>

            <ul className="space-y-3 mt-6 md:mt-0">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-[14px] h-[14px] rounded-full bg-[#FFD540] flex items-center justify-center mt-1">
                    <svg className="w-2 h-2 text-black" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span
                    className="text-[14px] md:text-[15px] font-medium text-[#CCCCCC]"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right – Form */}
          <motion.div
            ref={formRef}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            custom={0.15}
          >
            <div
              id="hero-hubspot-form"
              className="bg-[#131415] rounded-[16px] p-6 md:p-8 border border-white/10"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
