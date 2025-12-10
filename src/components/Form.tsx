import { useEffect, useRef, useState } from 'react'
import './Form.css'

declare global {
  interface Window {
    hbspt: any;
    dataLayer: any[];
  }
}

const Form = () => {
  const formRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Intersection Observer para cargar el script solo cuando el formulario esté cerca
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '200px' // Empezar a cargar 200px antes de que sea visible
      }
    )

    if (formRef.current) {
      observer.observe(formRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const scriptId = 'hubspot-forms-script'
    
    // Evitar cargar el script múltiples veces
    if (document.getElementById(scriptId)) {
      return
    }
    
    const script = document.createElement('script')
    script.id = scriptId
    script.src = 'https://js.hsforms.net/forms/embed/v2.js'
    script.charset = 'utf-8'
    script.type = 'text/javascript'
    script.async = true
    
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "23480943",
          formId: "6fca809e-de67-4c44-b5d7-c38bdda50427",
          region: "na1",
          target: '#hubspot-form-container',
          onFormSubmit: function($form: any) {
            const email = $form.find("input[name='email']").val()
            const phone = $form.find("input[name='phone']").val()
            const firstName = $form.find("input[name='firstname']").val()
            const lastName = $form.find("input[name='lastname']").val()

            window.dataLayer = window.dataLayer || []
            window.dataLayer.push({
              event: 'hubspotFormSubmitted',
              userEmail: email,
              userPhone: phone,
              userFirstName: firstName,
              userLastName: lastName
            })
          }
        })
      }
    }
    
    document.body.appendChild(script)
  }, [isVisible])

  return (
    <section id="contacto" className="form-section" ref={formRef}>
      <div className="form-container">
        <div className="form-badge">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="#FFD540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 8L9 12L7 10" stroke="#FFD540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>CONTACTO</span>
        </div>
        <h2>Hablar con un experto</h2>
        <p className="form-subtitle">
          Completa el formulario y un experto se pondrá en contacto contigo<br />
          para ayudarte a implementar IA en tu servicio al cliente.
        </p>
        <p className="form-target-text">Para marcas con más de 5 ejecutivos</p>
        <div className="form-card">
          <div id="hubspot-form-container"></div>
        </div>
      </div>
    </section>
  )
}

export default Form


