import './Solutions.css'
import { useState } from 'react'
import creaBotImg from '../assets/img/solutions/crea-bot.webp'
import respuestasImg from '../assets/img/solutions/respuestas.webp'
import escalabilidadImg from '../assets/img/solutions/image-2.webp'
import optimizaImg from '../assets/img/solutions/mkp.png'
import analisisImg from '../assets/img/solutions/analisis-masivo-1.webp'

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
      title: 'Respuestas instanáneas 24/7',
      description: 'Resuelve consultas con la naturalidad de un experto gracias a nuestra IA generativa.Ofrece respuestas precisas y conversaciones fluidas que harán que tus clientes se sientan realmente atendidos.',
      image: respuestasImg
    },
    {
      title: 'Escalabilidad sin límites ',
      description: 'Maneja miles de conversaciones simultáneas sin necesidad de más números ni agentes.',
      image: optimizaImg
    },
    {
      title: 'Optimiza tus Chatbots por tu cuenta, sin código',
      description: 'Analiza el desempeño de tus chatbots y descubre nuevas oportunidades de automatización. Toma decisiones basadas en datos para mejorar constantemente la experiencia de tus clientes.',
      image: escalabilidadImg
    },
    {
      title: 'Análisis masivo del comportamiento de clientes',
      description: 'Analiza miles de conversaciones con clientes con Inteligencia Artificial para identificar patrones, descubrir oportunidades y mejorar continuamente tus productos y procesos.',
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
        <h2>Soluciones con Adereso AI</h2>
        
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
                  <img src={solutions[activeSlide].image} alt={solutions[activeSlide].title} />
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


