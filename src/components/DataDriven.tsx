import './DataDriven.css'

const DataDriven = () => {
  return (
    <section className="data-driven">
      <div className="data-driven-container">
        <div className="data-driven-badge">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="#FFD540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 6V10" stroke="#FFD540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 14H10.01" stroke="#FFD540" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>DIFERENCIACIÓN</span>
        </div>
        <h2>Mejoramos tu eficiencia y atención desde los datos</h2>
        <div className="data-grid">
          <div className="data-card">
            <h3>CX data-driven</h3>
            <p>
              Nuestra IA analiza tus miles de interacciones con clientes para identificar y planificar junto a ti las automatizaciones de máximo impacto en tu ahorro y experiencia de clientes.
            </p>
          </div>
          <div className="data-card">
            <h3>Paga por lo que usas</h3>
            <p>
              Ofrecemos un modelo de precios predecible basado en conversaciones, sin costos ocultos – pagas solo por el valor real que la automatización genera para tu negocio.
            </p>
          </div>
          <div className="data-card">
            <h3>Acompañamiento</h3>
            <p>
              Diseñamos automatizaciones y chatbots que se adaptan a tu proceso de negocio específico, asesorándote con las mejores prácticas de expertos en tu industria.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DataDriven

