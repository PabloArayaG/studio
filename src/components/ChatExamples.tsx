import './ChatExamples.css'

const ChatExamples = () => {
  return (
    <section className="chat-examples">
      <div className="chat-examples-container">
        <h2>4 Formas de reducir costos y<br />mejorar la atención al cliente</h2>
        <div className="chat-grid">
          <div className="chat-card">
            <div className="chat-header">
              <div className="chat-status">
                <span className="status-dot"></span>
                <span>WhatsApp</span>
              </div>
            </div>
            <div className="chat-messages">
              <div className="message received">
                <div className="message-bubble">Hola! Necesito ayuda con mi pedido</div>
              </div>
              <div className="message sent">
                <div className="message-bubble">¡Hola! Claro, con gusto te ayudo. ¿Cuál es tu número de pedido?</div>
              </div>
              <div className="message received">
                <div className="message-bubble">#12345</div>
              </div>
              <div className="message sent">
                <div className="message-bubble">Perfecto, veo que tu pedido está en camino y llegará mañana</div>
              </div>
            </div>
            <div className="chat-label">Automatización<br />de respuestas</div>
          </div>

          <div className="chat-card">
            <div className="chat-header">
              <div className="chat-status">
                <span className="status-dot"></span>
                <span>WhatsApp</span>
              </div>
            </div>
            <div className="chat-messages">
              <div className="message received">
                <div className="message-bubble">¿Tienen disponible este producto?</div>
              </div>
              <div className="message sent">
                <div className="message-bubble">Sí, tenemos stock disponible. ¿Te gustaría conocer más detalles?</div>
              </div>
              <div className="message received">
                <div className="message-bubble">Sí, por favor</div>
              </div>
              <div className="message sent">
                <div className="message-bubble">
                  <div className="product-card">
                    <div className="product-image">📦</div>
                    <div className="product-info">
                      <div className="product-name">Producto Premium</div>
                      <div className="product-price">$99.99</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chat-label">Catálogo de<br />productos</div>
          </div>

          <div className="chat-card">
            <div className="chat-header">
              <div className="chat-status">
                <span className="status-dot"></span>
                <span>WhatsApp</span>
              </div>
            </div>
            <div className="chat-messages">
              <div className="message received">
                <div className="message-bubble">¿Cuándo abren?</div>
              </div>
              <div className="message sent">
                <div className="message-bubble">Estamos abiertos de lunes a viernes de 9am a 6pm</div>
              </div>
              <div className="message received">
                <div className="message-bubble">¿Y los sábados?</div>
              </div>
              <div className="message sent">
                <div className="message-bubble">Los sábados abrimos de 10am a 2pm</div>
              </div>
            </div>
            <div className="chat-label">Call to action<br />personalizado</div>
          </div>

          <div className="chat-card">
            <div className="chat-header">
              <div className="chat-status">
                <span className="status-dot"></span>
                <span>WhatsApp</span>
              </div>
            </div>
            <div className="chat-messages">
              <div className="message received">
                <div className="message-bubble">Quiero agendar una cita</div>
              </div>
              <div className="message sent">
                <div className="message-bubble">Perfecto! ¿Qué día te viene mejor?</div>
              </div>
              <div className="message received">
                <div className="message-bubble">Este viernes</div>
              </div>
              <div className="message sent">
                <div className="message-bubble">✅ Cita agendada para el viernes 10am. Te enviamos confirmación</div>
              </div>
            </div>
            <div className="chat-label">Acceso de<br />información</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChatExamples

