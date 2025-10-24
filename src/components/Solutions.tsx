import './Solutions.css'

const Solutions = () => {
  return (
    <section className="solutions">
      <div className="solutions-container">
        <h2>Soluciones con Adereso AI</h2>
        <div className="solutions-content">
          <div className="solution-visual">
            <div className="chat-preview">
              <div className="chat-bubble user">
                Hola buenos días
              </div>
              <div className="chat-bubble bot">
                Hola! Buenos días, bienvenido a Adereso ¿En qué puedo ayudarte hoy?
              </div>
              <div className="chat-bubble user">
                Quiero consultar sobre los servicios
              </div>
            </div>
          </div>
          <div className="solution-info">
            <div className="solution-badge">
              <span className="badge-dot"></span>
              <span>Respuestas inteligentes 24/7</span>
            </div>
            <h3>Responde como tú lo harías, pero automático</h3>
            <p>
              Adereso AI entiende el contexto de cada conversación y responde de manera natural,
              manteniendo el tono de tu marca. Desde consultas simples hasta procesos complejos,
              tu asistente virtual aprende continuamente para mejorar cada interacción.
            </p>
            <ul className="solution-features">
              <li>✓ Procesamiento de lenguaje natural avanzado</li>
              <li>✓ Personalización según tu industria</li>
              <li>✓ Integración con tu base de conocimiento</li>
              <li>✓ Mejora continua con cada conversación</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions

