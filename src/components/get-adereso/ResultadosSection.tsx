import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const, delay },
  }),
};

export const ResultadosSection = () => {
  return (
    <section className="bg-[#0C0C0D] py-16 md:py-24">
      <style>{`
        #aw-casos-widget {
          --aw-bg: #131415;
          --aw-card-bg: #131415;
          --aw-text: #ffffff;
          --aw-text-muted: #a3a3a3;
          --aw-brand: #ffd540;
          --aw-border: rgba(255, 255, 255, 0.1);
          font-family: "Work Sans", system-ui, -apple-system, sans-serif;
          color: var(--aw-text);
        }
        #aw-casos-widget, #aw-casos-widget * { box-sizing: border-box; }
        #aw-casos-widget .aw-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px 38px;
          margin-bottom: 44px;
        }
        #aw-casos-widget .aw-card {
          min-height: 234px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          padding: 30px;
          border-radius: 10px;
          border: 1px solid var(--aw-border);
          background: var(--aw-card-bg);
        }
        #aw-casos-widget .aw-logo { width: auto; max-width: 250px; margin-bottom: 2px; }
        #aw-casos-widget .aw-logo.walmart  { height: 36px; }
        #aw-casos-widget .aw-logo.cencosud { height: 40px; }
        #aw-casos-widget .aw-logo.kitchen  { height: 38px; }
        #aw-casos-widget .aw-logo.chilquinta { height: 27px; }
        #aw-casos-widget .aw-logo.falabella { height: 28px; }
        #aw-casos-widget .aw-logo.pcfactory { height: 40px; }
        #aw-casos-widget .aw-metric {
          margin: 0;
          font-family: "Outfit", system-ui, -apple-system, sans-serif;
          font-size: 40px;
          line-height: 1.05;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: var(--aw-brand);
        }
        #aw-casos-widget .aw-description {
          margin: 0 0 20px;
          font-size: 18px;
          line-height: 1.2;
          color: #fff;
          max-width: 250px;
        }
        #aw-casos-widget .aw-card-action {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 14px;
          border-radius: 9999px;
          border: 1px solid var(--aw-border);
          background: #131415;
          color: #fff;
          font-size: 14px;
          line-height: 1;
          text-decoration: none;
          transition: background-color 160ms ease, border-color 160ms ease;
        }
        #aw-casos-widget .aw-card-action:hover {
          background: #1a1c1d;
          border-color: rgba(255,255,255,0.16);
        }
        #aw-casos-widget .aw-footer { display: flex; justify-content: center; }
        #aw-casos-widget .aw-footer-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 24px;
          border-radius: 9999px;
          border: 1px solid var(--aw-border);
          background: #131415;
          color: #fff;
          font-family: "Outfit", system-ui, -apple-system, sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: -0.01em;
          text-decoration: none;
          transition: background-color 160ms ease, border-color 160ms ease;
        }
        #aw-casos-widget .aw-footer-btn:hover {
          background: #1a1c1d;
          border-color: rgba(255,255,255,0.16);
        }
        @media (max-width: 1120px) {
          #aw-casos-widget .aw-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 22px;
          }
        }
        @media (max-width: 740px) {
          #aw-casos-widget .aw-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            margin-bottom: 30px;
          }
          #aw-casos-widget .aw-card { padding: 24px; min-height: 220px; }
          #aw-casos-widget .aw-logo { max-width: 180px; max-height: 34px; height: auto; object-fit: contain; }
          #aw-casos-widget .aw-logo.walmart   { max-height: 32px; }
          #aw-casos-widget .aw-logo.cencosud  { max-height: 34px; }
          #aw-casos-widget .aw-logo.kitchen   { max-height: 32px; }
          #aw-casos-widget .aw-logo.chilquinta{ max-height: 25px; }
          #aw-casos-widget .aw-logo.falabella { max-height: 27px; }
          #aw-casos-widget .aw-logo.pcfactory { max-height: 32px; }
          #aw-casos-widget .aw-metric { font-size: 34px; }
          #aw-casos-widget .aw-description { font-size: 16px; max-width: 100%; margin-bottom: 16px; }
          #aw-casos-widget .aw-card-action,
          #aw-casos-widget .aw-footer-btn { font-size: 13px; }
        }
        @media (max-width: 420px) {
          #aw-casos-widget .aw-card { padding: 18px; min-height: 200px; }
          #aw-casos-widget .aw-logo { max-width: 152px; max-height: 30px; }
        }
      `}</style>

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
          Casos de éxito
        </motion.p>

        <motion.h2
          className="text-[26px] md:text-[36px] font-semibold leading-[1.2] text-white mb-10 md:mb-14 max-w-[600px]"
          style={{ fontFamily: "'Outfit', sans-serif" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={0.1}
        >
          Resultados que hablan por sí solos
        </motion.h2>

        <motion.div
          id="aw-casos-widget"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={0.2}
        >
          <div className="aw-grid">
            <article className="aw-card">
              <img className="aw-logo walmart" src="https://adereso.ai/wp-content/uploads/2025/09/walmart-logo.svg" alt="Walmart" />
              <p className="aw-metric">98%</p>
              <p className="aw-description">Cumplimiento SLA con +500 tickets/mes</p>
              <a className="aw-card-action" href="https://adereso.ai/casos_exito_escritos/walmart-chile-atencion-omnicanal-ia/">
                Leer historia <span className="arrow">›</span>
              </a>
            </article>

            <article className="aw-card">
              <img className="aw-logo cencosud" src="https://adereso.ai/wp-content/uploads/2025/09/sodimac-logo.svg" alt="Sodimac" />
              <p className="aw-metric">75%</p>
              <p className="aw-description">Reducción en tiempos de respuesta</p>
              <a className="aw-card-action" href="https://adereso.ai/casos_exito_escritos/sodimac-el-gigante-del-retail-para-el-hogar/">
                Leer historia <span className="arrow">›</span>
              </a>
            </article>

            <article className="aw-card">
              <img className="aw-logo kitchen" src="https://adereso.ai/wp-content/uploads/2026/03/kc.svg" alt="Kitchen Center" />
              <p className="aw-metric">14%</p>
              <p className="aw-description">Conversión en carritos recuperados con IA</p>
            </article>

            <article className="aw-card">
              <img className="aw-logo chilquinta" src="https://adereso.ai/wp-content/uploads/2025/11/chilquinta-1.webp" alt="Chilquinta" />
              <p className="aw-metric">95%</p>
              <p className="aw-description">Automatización de consultas</p>
              <a className="aw-card-action" href="https://adereso.ai/casos_exito_escritos/chilquinta-automatizacion-consultas-ia/">
                Leer historia <span className="arrow">›</span>
              </a>
            </article>

            <article className="aw-card">
              <img className="aw-logo falabella" src="https://adereso.ai/wp-content/uploads/2025/09/falabella-logo.svg" alt="Falabella" />
              <p className="aw-metric">+8%</p>
              <p className="aw-description">En tasas de retiro de compras</p>
              <a className="aw-card-action" href="https://adereso.ai/casos_exito_escritos/falabella-com-una-organizacion-mas-agil-y-flexible/">
                Leer historia <span className="arrow">›</span>
              </a>
            </article>
          </div>

          <div className="aw-footer">
            <a className="aw-footer-btn" href="https://adereso.ai/casos-de-exitos/">
              Ver todos los casos de éxito
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
