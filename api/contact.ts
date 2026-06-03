import { handleContactSubmit } from '../src/lib/hubspot/handle-contact-submit'

type Req = {
  method?: string
  body?: unknown
  headers?: { cookie?: string }
}

type Res = {
  status: (code: number) => Res
  json: (body: unknown) => void
}

export default async function handler(req: Req, res: Res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' })
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
  const pageUri =
    body && typeof body === 'object' && 'pageUri' in body
      ? String((body as { pageUri?: string }).pageUri ?? '')
      : undefined

  const { pageUri: _omit, ...formData } = (body ?? {}) as Record<string, unknown>
  const result = await handleContactSubmit(formData, {
    pageUri: pageUri || undefined,
    pageName: 'Contacto',
    cookieHeader: req.headers?.cookie,
  })

  if (result.ok) {
    return res.status(200).json({ ok: true })
  }

  return res.status(result.status).json({ ok: false, message: result.message })
}
