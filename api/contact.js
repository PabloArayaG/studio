import { handleContactSubmit } from './lib/contact-form.js'

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ ok: false, message: 'Method not allowed' })
    }

    let body = req.body
    if (typeof body === 'string') {
      body = JSON.parse(body)
    }
    if (!body || typeof body !== 'object') {
      return res.status(400).json({ ok: false, message: 'Datos inválidos' })
    }

    const pageUri = typeof body.pageUri === 'string' ? body.pageUri : undefined
    const { pageUri: _omit, ...formData } = body

    const result = await handleContactSubmit(formData, {
      pageUri: pageUri || undefined,
      pageName: 'Contacto',
      cookieHeader: req.headers?.cookie,
    })

    if (result.ok) {
      return res.status(200).json({ ok: true })
    }

    return res.status(result.status).json({ ok: false, message: result.message })
  } catch (err) {
    console.error('Contact API error:', err)
    return res.status(500).json({ ok: false, message: 'Error interno del servidor' })
  }
}
