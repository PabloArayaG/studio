import { motion } from 'framer-motion';
import backgroundImg from '../../assets/Background.png';
import mbpImg from '../../assets/MBP-demo.png';

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const, delay },
  }),
};

export const HeroSection = () => {
  return (
    <section className="group relative bg-[#0C0C0D] text-white">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] group-hover:translate-y-[1%]">
          <img
            src={backgroundImg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-6 pt-6 md:pt-10 pb-16 md:pb-24 overflow-visible">
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-4 md:mb-14"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <a href="https://adereso.ai" target="_blank" rel="noopener noreferrer">
            <img
              src="/logoadereso.webp"
              alt="Adereso AI"
              className="h-6 md:h-7 w-auto"
            />
          </a>
        </motion.div>

        {/* Badge */}
        <motion.div
          className="flex justify-center mb-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.05}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <WhatsAppIcon className="w-4 h-4 text-white/80" />
            <span className="text-[12px] md:text-[14px] font-normal text-white/80" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Agentes IA para WhatsApp Business
            </span>
          </div>
        </motion.div>

        {/* H1 */}
        <motion.div
          className="text-center max-w-[1100px] mx-auto mb-3"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          <h1
            className="text-[28px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.02em] text-white"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Convierte conversaciones en ventas{' '}
            <br className="hidden md:block" />
            con Agentes IA en WhatsApp
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-center text-[#CCCCCC] text-[15px] md:text-[18px] font-normal mx-auto mb-5 leading-[1.6] md:whitespace-nowrap"
          style={{ fontFamily: "'Work Sans', sans-serif" }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          Vende más, recupera oportunidades y mejora tu postventa desde un solo lugar.
        </motion.p>

        {/* Partners badges */}
        <motion.div
          className="flex justify-center mb-5"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.25}
        >
          <img
            src={mbpImg}
            alt="Meta Business Partner & Shopify Partners"
            className="h-auto max-w-[220px] md:max-w-[320px] w-full opacity-80"
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 mb-8"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          <a
            href="#contacto"
            className="group/btn inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#FFD540] hover:bg-[#FFE37A] text-black text-[16px] font-medium rounded-full transition-all duration-200 w-full sm:w-auto"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Hablar con un experto
            <svg className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=56934198980&text=Hola%2C+quiero+saber+sobre+los+productos+de+Adereso&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/10 text-white text-[16px] font-medium rounded-full transition-all duration-200 bg-[#131415] hover:bg-[#1a1b1c] w-full sm:w-auto"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <WhatsAppIcon className="w-4 h-4" />
            Pruébalo
          </a>
        </motion.div>

        {/* Logos clientes - marquee */}
        <motion.div
          className="relative mb-6 md:mb-14 max-w-[1100px] mx-auto overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0C0C0D] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0C0C0D] to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee">
            {[0, 1].map((set) => (
              <div key={set} className="flex items-center gap-10 shrink-0 px-5">
                {[
                  { src: '/Falabella.svg', alt: 'Falabella', h: 'h-[17px]' },
                  { src: '/Sodimac.svg', alt: 'Sodimac', h: 'h-[14px]' },
                  { src: '/walmart.svg', alt: 'Walmart', h: 'h-[25px]' },
                  { src: '/metlife.svg', alt: 'MetLife', h: 'h-[17px]' },
                  { src: '/Kaufmann.svg', alt: 'Kaufmann', h: 'h-[14px]' },
                  { src: '/chilexpress.svg', alt: 'Chilexpress', h: 'h-[21px]' },
                  { src: '/chilquinta.svg', alt: 'Chilquinta', h: 'h-[21px]' },
                ].map((logo) => (
                  <img
                    key={`${set}-${logo.alt}`}
                    src={logo.src}
                    alt={logo.alt}
                    className={`${logo.h} w-auto opacity-60 shrink-0`}
                  />
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Demo */}
        <motion.div
          className="relative md:mx-auto md:max-w-[1400px]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
        >
          <div
            className="relative w-[calc(100%+32px)] -ml-4 md:ml-0 md:w-full md:rounded-[10px] overflow-hidden md:border md:border-white/5 aspect-[4/3] md:h-auto md:aspect-[1.98]"
          >
            <iframe
              src="https://app.supademo.com/embed/cmjrnscgs005az80jybweuo8a?embed_v=2"
              loading="lazy"
              title="Demo Studio + Desk"
              allow="clipboard-write"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
            />
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 mt-3 md:mt-4 px-4 md:px-0">
            <img
              src="https://adereso.ai/wp-content/uploads/2026/04/d0wj_0jfk_210210-convertido.png"
              alt=""
              className="w-6 h-6 object-contain flex-shrink-0"
            />
            <span
              className="text-[15px] md:text-[16px] text-white font-semibold"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              ¡Prueba nuestra demo interactiva!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
