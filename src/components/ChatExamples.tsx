import './ChatExamples.css'
import { useState } from 'react'
import automatizacionImg from '../assets/img/Chatexamples/automatiza-1-963x1024.webp'
import asistenteVentaImg from '../assets/img/Chatexamples/asistente-1-976x1024.webp'
import calificacionLeadImg from '../assets/img/Chatexamples/califica-972x1024.webp'

const ChatExamples = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }

  const features = [
    {
      title: 'Automatización',
      subtitle: 'Respuestas de Soporte',
      description: 'Responde instantáneamente a consultas frecuentes 24/7 sin intervención humana. Reduce tiempos de espera y aumenta la satisfacción del cliente.',
      image: automatizacionImg
    },
    {
      title: 'Asistente de venta',
      subtitle: 'Conversión inteligente',
      description: 'Guía a tus clientes en el proceso de compra con recomendaciones personalizadas. Aumenta tus conversiones con un asistente disponible siempre.',
      image: asistenteVentaImg
    },
    {
      title: 'Calificación de lead',
      subtitle: 'Priorización automática',
      description: 'Identifica y prioriza automáticamente los leads más valiosos para tu negocio. Optimiza el tiempo de tu equipo de ventas.',
      image: calificacionLeadImg
    }
  ]

  return (
    <section className="chat-examples">
      <div className="chat-examples-container">
        <h2>3 Formas de reducir costos y<br />mejorar la atención al cliente</h2>
        <div className="chat-interactive">
          <div className="chat-tabs">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`tab-item ${activeTab === index ? 'active' : ''}`}
                onClick={() => handleTabClick(index)}
              >
                <div className="tab-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="chat-display">
            <div className="display-image">
              <img 
                src={features[activeTab].image} 
                alt={features[activeTab].title}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChatExamples

