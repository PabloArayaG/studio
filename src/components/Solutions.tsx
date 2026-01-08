import './Solutions.css'
import { useState } from 'react'
import creaBotImg from '../assets/img/solutions/crear-chatbots-dm-1.webp'
import respuestasImg from '../assets/img/solutions/respuesta-en-segundos.webp'
import escalabilidadImg from '../assets/img/solutions/derivacion.webp'
import optimizaImg from '../assets/img/solutions/mkp.webp'
import analisisImg from '../assets/img/solutions/Tasasx3.png'

const Solutions = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [slideDirection, setSlideDirection] = useState('next')

  const solutions = [
    {
      title: 'Crea Chatbots en segundos con Adereso Studio',
      description: 'Sube tu base de conocimiento, descríbele su objetivo principal e instrucciones generales de como se comportará y conéctalo a WhatsApp u otros canales. Automatiza conversaciones sin código.',
      image: creaBotImg
    },
    {
      title: 'Respuestas instantáneas 24/7',
      description: 'Resuelve consultas con la naturalidad de un experto gracias a nuestra IA generativa. Ofrece respuestas precisas y conversaciones fluidas que harán que tus clientes se sientan realmente atendidos.',
      image: respuestasImg
    },
    {
      title: 'Escalabilidad sin límites ',
      description: 'Maneja miles de conversaciones simultáneas sin necesidad de más números ni agentes.',
      image: optimizaImg
    },
    {
      title: 'Derivación Inteligente',
      description: 'Tu agente IA detecta la intención del cliente y puede derivar al departamento adecuado en el mismo chat con todo el contexto disponible',
      image: escalabilidadImg
    },
    {
      title: 'Reportería avanzados para la mejora continua',
      description: 'Optimiza continuamente tu equipo con reportes avanzados impulsados por IA, flujos automatizados y métricas de rendimiento en tiempo real.',
      image: analisisImg
    }
  ]

  const handlePrev = () => {
    setSlideDirection('prev')
    setActiveSlide((prev) => (prev === 0 ? solutions.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setSlideDirection('next')
    setActiveSlide((prev) => (prev === solutions.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="solutions">
      <div className="solutions-container">
        <h2>Automatiza, vende más y ofrece atención 24/7 <br></br>sin ampliar tus equipos.</h2>
        
        <div className="carousel-wrapper">
          <button className="carousel-arrow left" onClick={handlePrev} aria-label="Anterior">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="carousel-content">
            <div key={activeSlide} className={`solution-slide slide-${slideDirection}`}>
              <div className="solution-visual">
                {solutions[activeSlide].image ? (
                  <img src={solutions[activeSlide].image} alt={solutions[activeSlide].title} loading="lazy" />
                ) : (
                  <div className="placeholder-image">
                    <span>Imagen {activeSlide + 1}</span>
                  </div>
                )}
              </div>
              <div className="solution-info">
                <h3>{solutions[activeSlide].title}</h3>
                <p>{solutions[activeSlide].description}</p>
              </div>
            </div>
          </div>

          <button className="carousel-arrow right" onClick={handleNext} aria-label="Siguiente">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="carousel-dots">
          {solutions.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${activeSlide === index ? 'active' : ''}`}
              onClick={() => {
                setSlideDirection(index > activeSlide ? 'next' : 'prev')
                setActiveSlide(index)
              }}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions


