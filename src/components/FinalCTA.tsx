import './FinalCTA.css'
import roiBg from '../assets/img/roi/bg.webp'

const FinalCTA = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const contactSection = document.getElementById('contacto')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="final-cta">
      <div className="final-cta-container">
        <div className="final-cta-box" style={{ backgroundImage: `url(${roiBg})` }}>
          <h2>
            Estás a un paso de la<br />
            <span className="highlight">automatización</span>
          </h2>
          <p className="final-cta-subtitle">
            Agenda una demo y vive la experiencia de gestionar a tus clientes con<br />
            Adereso. Completa el formulario y nos comunicaremos contigo.
          </p>
          <a href="#contacto" onClick={scrollToContact} className="btn-cta-final">
            Hablar con un experto →
          </a>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA

