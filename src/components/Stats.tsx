import './Stats.css'

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats-container">
        <h2>Deja de perder clientes por respuestas lentas</h2>
        <p className="stats-subtitle">
          Con nuestro AI hemos logrado que empresas de Hispanoamérica logren resultados impresionantes<br />
          para mejorar su experiencia de cliente y reducir costos.
        </p>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-label-top">Respuesta más rápido</div>
            <div className="stat-value">242X</div>
            <div className="stat-description">
              Responde a tus clientes al instante, sin importar la hora del día.
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-label-top">Reduce tu cuestión</div>
            <div className="stat-value">83%</div>
            <div className="stat-description">
              Automatiza hasta el 83% de las conversaciones de soporte.
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-label-top">Aumenta satisfacción</div>
            <div className="stat-value">98%</div>
            <div className="stat-description">
              Los clientes prefieren respuestas rápidas y precisas 24/7.
            </div>
          </div>
        </div>
        <button className="btn-primary-large">Implementa con demo</button>
      </div>
    </section>
  )
}

export default Stats

