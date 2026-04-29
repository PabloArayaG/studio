import { useEffect } from 'react';
import { motion } from 'framer-motion';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'media-id'?: string;
          aspect?: string;
        },
        HTMLElement
      >;
    }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const, delay },
  }),
};

export const AnaliticaSection = () => {
  useEffect(() => {
    const loadScript = (src: string) => {
      if (document.querySelector(`script[src="${src}"]`)) return;
      const s = document.createElement('script');
      s.src = src;
      s.async = true;
      s.type = 'module';
      document.body.appendChild(s);
    };
    loadScript('https://fast.wistia.com/player.js');
    loadScript('https://fast.wistia.com/embed/5emqrklhoa.js');
  }, []);

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
          Solo en Adereso
        </motion.p>

        <motion.h2
          className="text-[30px] md:text-[42px] font-semibold leading-[1.15] text-white mb-6 md:mb-8 max-w-[560px]"
          style={{ fontFamily: "'Outfit', sans-serif" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={0.1}
        >
          Analítica avanzada:{' '}
          <br />
          lo que{' '}
          <span className="text-[#FFD540] underline decoration-[#FFD540] underline-offset-4">
            ningún otro
          </span>
          <br />
          chatbot te muestra.
        </motion.h2>

        <motion.div
          className="mb-10 md:mb-14 max-w-[480px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={0.2}
        >
          <p
            className="text-[16px] md:text-[17px] text-[#666666] leading-[1.6] mb-1"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            ¿Dónde se frustran tus clientes? ¿Dónde se caen las ventas?
          </p>
          <p
            className="text-[16px] md:text-[17px] text-white leading-[1.6]"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            Por primera vez, puedes verlo.
          </p>
        </motion.div>

        <motion.div
          className="rounded-[16px] overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={0.3}
        >
          <style>{`
            wistia-player[media-id='5emqrklhoa']:not(:defined) {
              background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/5emqrklhoa/swatch');
              display: block;
              filter: blur(5px);
              padding-top: 56.25%;
            }
          `}</style>
          <wistia-player media-id="5emqrklhoa" aspect="1.7777777777777777" />
        </motion.div>

      </div>
    </section>
  );
};
