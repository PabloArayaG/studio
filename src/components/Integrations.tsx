import './Integrations.css'

const Integrations = () => {
  return (
    <section className="integrations-section">
      <div className="integrations-container">
        <h2 className="integrations-heading">Nos integramos con tu Stack tecnológico</h2>
        
        <div className="intg-wrap">
          <div className="intg-grid">
            <article className="intg-card">
              <div className="intg-icon">
                <img src="https://adereso.ai/wp-content/uploads/2025/10/shopify-icon.webp" alt="Shopify" />
              </div>
              <h3 className="intg-title">Ecommerce</h3>
              <p className="intg-desc">Accede a datos clave y gestiona tus ventas de forma ágil y eficiente</p>
              <a className="intg-btn" href="https://adereso.ai/shopify/">Conoce más</a>
            </article>

            <article className="intg-card">
              <div className="intg-icon-salesforce">
                <img src="https://adereso.ai/wp-content/uploads/2025/10/salesforce-icon.webp" alt="Salesforce" />
              </div>
              <h3 className="intg-title">CRM</h3>
              <p className="intg-desc">Centraliza la información de tus clientes y mejora la relación con ellos</p>
              <a className="intg-btn" href="https://adereso.ai/hubspot/">Conoce más</a>
            </article>

            <article className="intg-card">
              <div className="intg-icon-mcp">
                <img src="https://adereso.ai/wp-content/uploads/2025/10/apimcp.webp" alt="API" />
              </div>
              <h3 className="intg-title">API + MCP</h3>
              <p className="intg-desc">Conecta tus sistemas y optimiza procesos con integraciones seguras y rápidas</p>
              <a className="intg-btn" href="https://adereso.ai/salesforce/">Conoce más</a>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Integrations
