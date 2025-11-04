import './Features.css'
import tiempoIcon from '../assets/img/Problem/Tiempo.webp'
import costosIcon from '../assets/img/Problem/Costos.webp'
import sadIcon from '../assets/img/Problem/insatisfacción.webp'

const Features = () => {
  return (
    <section className="features">
      <div className="features-container">
        <div className="problem-badge">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="#FF4E4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 6V10" stroke="#FF4E4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 14H10.01" stroke="#FF4E4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>EL PROBLEMA</span>
        </div>
        <h2>Tu Servicio al Cliente es ineficiente</h2>
        <p className="features-subtitle">
          Tus tiempos de respuesta aumentan, tus agentes se saturan y tus costos se disparan<br />
          — este ciclo se repite mientras más creces.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <img src={tiempoIcon} alt="Tiempo de espera" loading="lazy" />
            </div>
            <h3>Tiempo de espera</h3>
            <p>
              Aumenta y pierdes<br />
              oportunidades de venta
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src={costosIcon} alt="Costos operativos" loading="lazy" />
            </div>
            <h3>Costos operativos</h3>
            <p>
              Aumentan por necesitar más personal<br />
              para mantener el mismo servicio
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src={sadIcon} alt="Contact Center Saturado" loading="lazy" />
            </div>
            <h3>Contact Center Saturado</h3>
            <p>
              Aumenta tu rotación de ejecutivos y<br />
              costos de capacitación
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

