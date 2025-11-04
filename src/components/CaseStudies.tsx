import './CaseStudies.css'
import { useState } from 'react'
import sodimacImg from '../assets/img/case-studies/sodimac-caso-exito-adereso-r52shsy0gqkzr3bfhg6fnsiox9wcc8sowfo0x28j2g.webp'
import chilquintaImg from '../assets/img/case-studies/chilquinta-caso-exito-adereso-r52shs069wjpfhcsmxrt3ar8bw0z4joykb0jfs9x8o.webp'
import cencosudImg from '../assets/img/case-studies/cencosud-caso-exito-adereso-r52shr2c32if3ve5sfd6iszrqi5lwul886d1yibbew.webp'
import mkImg from '../assets/img/case-studies/tienda-mk-caso-exito-adereso-r52shsy0gqkzr3bfhg6fnsiox9wcc8sowfo0x28j2g.webp'
import falabellaImg from '../assets/img/case-studies/falabella-caso-exito-adereso-r52shs069wjpfhcsmxrt3ar8bw0z4joykb0jfs9x8o.webp'
import walmartImg from '../assets/img/case-studies/1733082854-92b25d964b220fb21bdac095aa44139358cee9892d5aa55a79b86945f60abbc0-d_640-r52shhny6q5jvrrtbbawtvd5snfxrvjwuvu75qp954.webp'
import sodimacLogo from '../assets/img/case-studies/Sodimac.webp'
import chilquintaLogo from '../assets/img/case-studies/Chilquinta.webp'
import cencosudLogo from '../assets/img/case-studies/cencosud-logo.webp'
import mkLogo from '../assets/img/case-studies/mk-blanco.webp'
import falabellaLogo from '../assets/img/case-studies/Falabella.webp'
import walmartLogo from '../assets/img/case-studies/walmart.webp'

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slideDirection, setSlideDirection] = useState('next')

  const cases = [
    {
      company: 'SODIMAC',
      logo: sodimacLogo,
      metric: '2.500',
      metricLabel: 'Tickets mensuales',
      description: 'Gracias a nuestra colaboración, se ha marcado un antes y un después en el servicio al cliente de Sodimac, estableciendo un nuevo estándar de eficiencia.',
      image: sodimacImg,
      link: 'https://adereso.ai/casos_exito_escritos/sodimac-el-gigante-del-retail-para-el-hogar/', // 👈 AQUÍ pones el link específico de Sodimac
    },
    {
      company: 'CHILQUINTA',
      companySubtitle: 'distribución',
      logo: chilquintaLogo,
      metric: '80.000+',
      metricLabel: 'Tickets mensuales',
      description: 'La automatización y chatbots han configurado y automatizado el 70% de los servicios críticos, optimizando la gestión de tickets y respuestas.',
      image: chilquintaImg,
      link: 'https://adereso.ai/casos_exito_escritos/chilquinta-automatizacion-consultas-ia/', // 👈 AQUÍ pones el link específico de Chilquinta
    },
    {
      company: 'CENCOSUD',
      logo: cencosudLogo,
      metric: '80.000',
      metricLabel: 'Tickets mensuales',
      description: 'Adereso ha sido fundamental en la transformación digital de Cencosud, agilizando y mejorando la gestión de atención al cliente.',
      image: cencosudImg,
      link: 'https://adereso.ai/casos_exito_escritos/cencosud-potencia-el-servicio-al-cliente-con-adereso/', // 👈 AQUÍ pones el link específico de Cencosud
    },
    {
      company: 'mK',
      logo: mkLogo,
      metric: '50X',
      metricLabel: 'Disminución primera respuesta',
      description: 'Mejora del Service Legal Agreement y reducción drástica del tiempo de respuesta.',
      image: mkImg,
      link: 'https://adereso.ai/casos_exito_escritos/grupo-k-atencion-omnicanal-inteligencia-artificial/', // 👈 AQUÍ pones el link específico de mK
    },
    {
      company: 'falabella.com',
      logo: falabellaLogo,
      metric: '2.000',
      metricLabel: 'Encuestas al mes',
      description: 'La unificación de la atención al cliente de sus diversas unidades de negocio y canales potenció la eficiencia y control en Falabella.',
      image: falabellaImg,
      link: 'https://adereso.ai/casos_exito_escritos/falabella-com-una-organizacion-mas-agil-y-flexible/', // 👈 AQUÍ pones el link específico de Falabella
    },
    {
      company: 'Walmart',
      logo: walmartLogo,
      metric: '500.000+',
      metricLabel: 'Tickets mensuales',
      description: 'La automatización y chatbots han configurado y automatizado el 70% de los servicios críticos, optimizando la gestión de tickets y respuestas.',
      image: walmartImg,
      link: 'https://adereso.ai/casos_exito_escritos/walmart-chile-atencion-omnicanal-ia/', // 👈 AQUÍ pones el link específico de Walmart
    }
  ]

  const nextSlide = () => {
    setSlideDirection('next')
    setCurrentSlide((prev) => (prev + 1) % cases.length)
  }

  const prevSlide = () => {
    setSlideDirection('prev')
    setCurrentSlide((prev) => (prev - 1 + cases.length) % cases.length)
  }

  return (
    <section className="case-studies">
      <div className="case-studies-container">
        <h2>Casos de negocio que inspiran</h2>
        
        <div className="cases-carousel-wrapper">
          <button className="cases-arrow cases-arrow-left" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="cases-carousel-content">
            <div className="intro-card">
              <h3>Automatización inteligente diseñada para equipos de CX</h3>
              <a href="https://adereso.ai/casos-de-exitos/" className="btn-view-all">Ver todos los casos</a>
            </div>

            <div key={currentSlide} className={`case-card-main slide-${slideDirection}`}>
              <div className="case-content-wrapper">
                <div className="company-logo">
                  {cases[currentSlide].logo ? (
                    <img src={cases[currentSlide].logo} alt={cases[currentSlide].company} className="company-logo-img" loading="lazy" />
                  ) : (
                    <>
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8H16V16H8V8Z" fill="white"/>
                        <path d="M8 24H16V32H8V24Z" fill="white"/>
                        <path d="M24 8H32V16H24V8Z" fill="white"/>
                      </svg>
                      <div className="company-name">
                        <span className="company-main">{cases[currentSlide].company}</span>
                        {cases[currentSlide].companySubtitle && (
                          <span className="company-subtitle">{cases[currentSlide].companySubtitle}</span>
                        )}
                      </div>
                    </>
                  )}
                </div>
                <div className="case-metric">
                  <div className="metric-number">{cases[currentSlide].metric}</div>
                  <div className="metric-label">{cases[currentSlide].metricLabel}</div>
                </div>
                <p className="case-description">
                  {cases[currentSlide].description}
                </p>
                <a href={cases[currentSlide].link} className="case-link">
                  Leer Historia <span>→</span>
                </a>
              </div>
              <div className="case-image-container">
                <div className="case-image-placeholder">
                  {cases[currentSlide].image ? (
                    <img src={cases[currentSlide].image} alt={cases[currentSlide].company} loading="lazy" />
                  ) : (
                    <span>Imagen pendiente</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <button className="cases-arrow cases-arrow-right" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies

