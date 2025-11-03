import './Clients.css'
import falabella from '../assets/img/clients/Falabella-04 1.png'
import metlife from '../assets/img/clients/Metlife.png'
import walmart from '../assets/img/clients/walmart 1.png'
import sodimac from '../assets/img/clients/Sodimac.png'
import kaufmann from '../assets/img/clients/Kaufmann 1.png'
import ikea from '../assets/img/clients/Ikea-logo.png'
import chilexpress from '../assets/img/clients/Chilexpress.png'
import paris from '../assets/img/clients/Paris-logo.png'
import marathon from '../assets/img/clients/Marathon.png'
import abastible from '../assets/img/clients/abastible 1.png'
import essbio from '../assets/img/clients/Essbio.png'
import esval from '../assets/img/clients/Esval.png'
import pcfactory from '../assets/img/clients/pcfactory 1.png'
import bci from '../assets/img/clients/Bci.png'

const Clients = () => {
  return (
    <section className="clients">
      <div className="clients-container">
        <p className="clients-title">+150 clientes ya integraron IA Generativa</p>
        <div className="clients-logos-wrapper">
          <div className="clients-logos">
            <div className="client-logo">
              <img src={falabella} alt="Falabella" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src={metlife} alt="Metlife" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src={walmart} alt="Walmart" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src={sodimac} alt="Sodimac" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src={kaufmann} alt="Kaufmann" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src={ikea} alt="Ikea" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src={chilexpress} alt="Chilexpress" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src={paris} alt="Paris" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src={marathon} alt="Marathon" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src={abastible} alt="Abastible" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src={essbio} alt="Essbio" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src={esval} alt="Esval" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src={pcfactory} alt="PC Factory" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src={bci} alt="Bci" loading="lazy" />
            </div>
            {/* Duplicado para loop infinito */}
            <div className="client-logo">
              <img src={falabella} alt="Falabella" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src={metlife} alt="Metlife" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src={walmart} alt="Walmart" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src={sodimac} alt="Sodimac" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src={kaufmann} alt="Kaufmann" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src={ikea} alt="Ikea" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src={chilexpress} alt="Chilexpress" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src={paris} alt="Paris" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src={marathon} alt="Marathon" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src={abastible} alt="Abastible" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src={essbio} alt="Essbio" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src={esval} alt="Esval" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src={pcfactory} alt="PC Factory" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src={bci} alt="Bci" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="clients-stats">
          <div className="stat-item">
            <div className="stat-number">+1M</div>
            <div className="stat-label"><span className="stat-label-highlight">USD generados al año</span><br />Te ayudamos a vender más</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">+1M</div>
            <div className="stat-label"><span className="stat-label-highlight">USD ahorrados al año</span><br />Optimizamos tu CX</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5X</div>
            <div className="stat-label"><span className="stat-label-highlight">Retornos sobre inversión</span><br />Resultados medibles</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients

