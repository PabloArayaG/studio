import './Stats.css'

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats-container">
        <div className="stats-badge">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="#FFD540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 6V10" stroke="#FFD540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 14H10.01" stroke="#FFD540" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>VALOR</span>
        </div>
        <h2>Deja de perder clientes por respuestas lentas</h2>
        <p className="stats-subtitle">
        Mientras tu competencia hace esperar a sus clientes, tu respondes al instante con IA
        </p>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-label-top">Responde más rápido <br></br>hasta</div>
            <div className="stat-value">242X</div>
            <div className="stat-description">
            Reducción tiempo de primera respuesta
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-label-top">Reduce tus costos operativos<br></br>hasta</div>
            <div className="stat-value">83%</div>
            <div className="stat-description">
            Ahorro en Costos Operativos
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-label-top">Resuelve problemas <br></br>
            complejos al instante</div>
            <div className="stat-value">98%</div>
            <div className="stat-description">
            Respuestas
            Automatizadas
            </div>
          </div>
        </div>
        <button className="btn-primary-large">Hablar con un experto →</button>
      </div>
    </section>
  )
}

export default Stats

