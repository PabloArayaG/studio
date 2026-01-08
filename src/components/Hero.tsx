import './Hero.css'
import whatsappIcon from '../assets/img/hero/whatsapp-icon.webp'
import videoThumbnail from '../assets/img/hero/thumbnail-1.webp'
import { useState } from 'react'

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const contactSection = document.getElementById('contacto')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-container">
        <a href="#contacto" onClick={scrollToContact} className="hero-badge">
          <img src={whatsappIcon} alt="WhatsApp" />
          <span>Chatbots con IA para WhatsApp Business</span>
        </a>
        <h1>
          Automatiza hasta 98% de tus<br />
          respuestas por <span className="whatsapp-text">WhatsApp</span>
        </h1>
        <p className="hero-subtitle">
          Chatbots impulsados por IA que entregan respuestas instantáneas y<br />
          personalizadas, automatizando ventas y atención al cliente en WhatsApp
        </p>
        <div className="hero-actions">
          <a href="#contacto" onClick={scrollToContact} className="btn-primary-large">Hablar con un experto →</a>   <a href="https://api.whatsapp.com/send/?phone=56934198980&text=Hola%2C+quiero+saber+sobre+los+productos+de+Adereso&type=phone_number&app_absent=0"
    className="btn-secondary-large"> Pruébalo  </a>
        </div>
        <div className={`hero-video ${isVideoPlaying ? 'video-playing' : 'video-thumbnail-mode'}`}>
          {!isVideoPlaying ? (
            <div className="video-thumbnail" onClick={() => setIsVideoPlaying(true)}>
              <img src={videoThumbnail} alt="Video preview" fetchPriority="high" />
              <div className="play-button">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5.14v13.72L19 12L8 5.14z" fill="#131415"/>
                </svg>
              </div>
            </div>
          ) : (
            <iframe 
              src="https://www.youtube.com/embed/FXU6_UKSai0?si=a8XxmDVIpeGEw-BA&autoplay=1" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero

