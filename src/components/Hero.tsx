import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-badge">
          <span className="badge-icon">◇</span>
          <span>Adereso</span>
        </div>
        <h1>Automatiza respuestas a<br />clientes en todas tus canales</h1>
        <p className="hero-subtitle">
          Usa la Inteligencia Artificial para automatizar tus conversaciones sin importar cuántos<br />
          canales tengas. Adereso AI se adapta a WhatsApp, Facebook e Instagram.
        </p>
        <div className="hero-actions">
          <button className="btn-primary-large">Solicitar una demo</button>
          <button className="btn-secondary-large">Contacto</button>
        </div>
        <div className="hero-video">
          <div className="video-placeholder">
            <div className="video-logo">
              <span className="logo-icon-large">◇</span>
              <span className="logo-text-large">adereso</span>
              <span className="logo-subtext">by studio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

