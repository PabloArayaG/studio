import './Clients.css'

const Clients = () => {
  return (
    <section className="clients">
      <div className="clients-container">
        <p className="clients-title">Más clientes en Hispanoamérica de Adereso</p>
        <div className="clients-logos">
          <div className="client-logo">
            <div className="logo-placeholder">
              <span>JM</span>
            </div>
          </div>
          <div className="client-logo">
            <div className="logo-placeholder">
              <span>LOGO</span>
            </div>
          </div>
          <div className="client-logo">
            <div className="logo-placeholder">
              <span>LOGO</span>
            </div>
          </div>
          <div className="client-logo">
            <div className="logo-placeholder">
              <span>LOGO</span>
            </div>
          </div>
          <div className="client-logo">
            <div className="logo-placeholder">
              <span>LOGO</span>
            </div>
          </div>
        </div>
        <div className="clients-stats">
          <div className="stat-item">
            <div className="stat-number">+1M</div>
            <div className="stat-label">usuarios al mes a nivel<br />de la región</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">+1M</div>
            <div className="stat-label">clientes/lead al mes en toda<br />la región</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5X</div>
            <div className="stat-label">Más conversión que la<br />competencia</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients

