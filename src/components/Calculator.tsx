import './Calculator.css'
import roiBg from '../assets/img/roi/bg.webp'

const Calculator = () => {
  return (
    <section className="calculator">
      <div className="calculator-container">
        <div className="calculator-content" style={{ backgroundImage: `url(${roiBg})` }}>
          <h2>Mira cuanto puedes ahorrar con Adereso AI</h2>
          <p className="calculator-subtitle">
            Calcula el ROI de implementar IA en tu servicio al cliente.<br />
            La mayoría de nuestros clientes recuperan su inversión en menos de 3 meses.
          </p>
          <a href="https://adereso.ai/calculadora-roi-chatbots/" className="btn-primary-large">Calcular mi ahorro</a>
        </div>
      </div>
    </section>
  )
}

export default Calculator

