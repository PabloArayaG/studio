import './CaseStudies.css'

const CaseStudies = () => {
  return (
    <section className="case-studies">
      <div className="case-studies-container">
        <h2>Casos de negocio<br />que inspiran</h2>
        <div className="cases-grid">
          <div className="case-card large">
            <div className="case-content">
              <div className="case-tag">E-COMMERCE</div>
              <h3>
                Cómo una marca de retail<br />
                automatizó el 85% de sus<br />
                consultas con IA
              </h3>
              <button className="case-link">Ver caso completo →</button>
            </div>
          </div>
          <div className="case-card">
            <div className="case-image">
              <div className="image-placeholder">📊</div>
            </div>
            <div className="case-content-small">
              <h4>Cómo una empresa aumentó<br />en conversión 3x con respuestas<br />más rápidas.</h4>
              <button className="case-link-small">Ver caso →</button>
            </div>
          </div>
          <div className="case-card">
            <div className="case-image">
              <div className="image-placeholder">🏢</div>
            </div>
            <div className="case-content-small">
              <h4>Reducir tiempo de atención<br />de 24h a 2 minutos con<br />Adereso AI.</h4>
              <button className="case-link-small">Ver caso →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies

