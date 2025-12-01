import './MobileNavbar.css'
import logo from '../assets/img/hero/logo-adereso-rb-2.webp'

const MobileNavbar = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const contactSection = document.getElementById('contacto')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="mobile-navbar">
      <div className="mobile-navbar-content">
        <div className="mobile-navbar-logo">
          <img src={logo} alt="Adereso" />
        </div>
        <a href="#contacto" onClick={scrollToContact} className="mobile-navbar-btn">
          Hablar con un experto
        </a>
      </div>
    </nav>
  )
}

export default MobileNavbar

