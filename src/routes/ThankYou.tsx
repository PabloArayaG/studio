import { Link } from 'react-router-dom'

export default function ThankYou() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      textAlign: 'center',
      backgroundColor: '#131415'
    }}>
      <div style={{ maxWidth: '600px' }}>
        <h1 style={{
          fontSize: '48px',
          marginBottom: '24px',
          color: '#FFFFFF'
        }}>
          ¡Gracias por tu interés!
        </h1>
        <p style={{
          fontSize: '18px',
          color: 'rgba(255, 255, 255, 0.7)',
          marginBottom: '40px',
          lineHeight: '1.6'
        }}>
          Hemos recibido tu solicitud. Nuestro equipo se pondrá en contacto contigo pronto para agendar una demo personalizada de Adereso.
        </p>
        <Link
          to="/"
          style={{
            display: 'inline-block',
            background: '#FFD540',
            color: '#131415',
            padding: '16px 40px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'all 0.3s'
          }}
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

