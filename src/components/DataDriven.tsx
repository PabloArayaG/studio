import './DataDriven.css'

const DataDriven = () => {
  return (
    <section className="data-driven">
      <div className="data-driven-container">
        <h2>Mejoramos tu eficiencia y atención desde los datos</h2>
        <div className="data-grid">
          <div className="data-card">
            <div className="data-icon">📊</div>
            <h3>Call center gestion</h3>
            <p>
              Centraliza todas las conversaciones de WhatsApp, Facebook e Instagram en un solo panel.
              Gestiona equipos, asigna conversaciones y monitorea el rendimiento en tiempo real.
            </p>
          </div>
          <div className="data-card">
            <div className="data-icon">🎯</div>
            <h3>Negocio de fidelización</h3>
            <p>
              Automatiza campañas de seguimiento y fidelización. Mantén a tus clientes
              comprometidos con mensajes personalizados basados en su comportamiento.
            </p>
          </div>
          <div className="data-card">
            <div className="data-icon">🔍</div>
            <h3>Recopila feedback</h3>
            <p>
              Recoge opiniones y sugerencias de tus clientes automáticamente.
              Analiza sentimientos y detecta oportunidades de mejora en tiempo real.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DataDriven

