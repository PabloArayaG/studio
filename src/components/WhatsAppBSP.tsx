import './WhatsAppBSP.css'
import whatsappBspLogo from '../assets/img/whatsapp/whatsapp-bsp-2048x403.webp'

const WhatsAppBSP = () => {
  return (
    <section className="whatsapp-bsp">
      <div className="whatsapp-bsp-container">
        <div className="whatsapp-content">
          <div className="whatsapp-left">
            <img src={whatsappBspLogo} alt="WhatsApp BSP" className="whatsapp-logo" />
          </div>
          <div className="whatsapp-right">
            <h3 className="whatsapp-title">OFFICIAL BUSINESS PARTNER</h3>
            <p className="whatsapp-description">
              Ser un WhatsApp BSP no solo permite ofrecer servicios de comunicación masiva con WhatsApp, sino que también abre oportunidades de negocio y diferenciación en el sector de la automatización y atención al cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatsAppBSP

