import {
  submitHubspotContactForm,
  validateContactFormData,
  type ContactFormData,
} from './contact-form'

export async function handleContactSubmit(
  body: unknown,
  opts: { pageUri?: string; pageName?: string; cookieHeader?: string } = {},
) {
  if (!validateContactFormData(body)) {
    return { ok: false as const, status: 400, message: 'Datos inválidos' }
  }

  const data = body as ContactFormData
  const hutk = opts.cookieHeader
    ? opts.cookieHeader.match(/(?:^|;\s*)hubspotutk=([^;]+)/)?.[1]
    : undefined

  try {
    await submitHubspotContactForm(data, {
      pageUri: opts.pageUri,
      pageName: opts.pageName ?? 'Contacto',
      hutk,
    })
    return { ok: true as const, status: 200 }
  } catch {
    return {
      ok: false as const,
      status: 502,
      message: 'No se pudo enviar. Revisa tu conexión e intenta de nuevo.',
    }
  }
}
