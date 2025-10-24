import './Features.css'

const Features = () => {
  return (
    <section className="features">
      <div className="features-container">
        <h2>Tu Servicio al Cliente es inteligente</h2>
        <p className="features-subtitle">
          Tu Bot de IA aprende de cada interacción, así mejora constantemente en WhatsApp, Facebook e Instagram<br />
          para que puedas atender mejor a tus clientes de tu negocio.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <div className="icon-circle">🎯</div>
            </div>
            <h3>Respuestas naturales</h3>
            <p>
              Responde a tus clientes en el mismo<br />
              tono de tu negocio, como lo harías tú.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <div className="icon-circle">💬</div>
            </div>
            <h3>Canales conectados</h3>
            <p>
              Desde solo un panel conecta todos tus<br />
              canales y automatiza respuestas.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <div className="icon-circle">🔧</div>
            </div>
            <h3>Gestión al instante</h3>
            <p>
              Los datos de clientes quedan en tus<br />
              reportes y CRM para mejores insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

