import './WhatsAppMockup.css'

const WhatsAppMockup = () => {
  return (
    <section className="whatsapp-mockup">
      <div className="whatsapp-mockup-container">
        <div className="whatsapp-mockup-content">
          <div className="mockup-left">
            <div className="mockup-badge">BUSINESS SERVICE PROVIDER</div>
            <h2 className="mockup-title">
              Aumenta un 21% tus ventas por WhatsApp
              en 30 días.
            </h2>
            <p className="mockup-description">
              Implementamos WhatsApp Business API en solo 2 semanas y<br />
              optimizamos tu operación comercial para aumentar ventas y llevar tu<br />
              CSAT sobre 80%, con acompañamiento experto y mejora continua.
            </p>
            <ul className="mockup-features">
              <li>
                <div className="feature-icon">●</div>
                <div className="feature-content">
                  <h4>Resultados medibles</h4>
                  <p>Incrementa ventas y eficiencia con objetivos claros desde el primer mes de operación.</p>
                </div>
              </li>
              <li>
                <div className="feature-icon">●</div>
                <div className="feature-content">
                  <h4>Optimización continua</h4>
                  <p>Business reviews mensuales con análisis de datos, asesoría experta y mejoras constantes en tu flujo de atención y ventas.</p>
                </div>
              </li>
              <li>
                <div className="feature-icon">●</div>
                <div className="feature-content">
                  <h4>Escala sin fricción</h4>
                  <p>Atiende miles de conversaciones simultáneas con agentes humanos e IA, sin límites de asientos ni agentes.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="mockup-right">
            <img 
              src="https://adereso.ai/wp-content/uploads/2025/09/bsp-3.webp" 
              alt="WhatsApp Business Mockup" 
              className="mockup-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatsAppMockup
