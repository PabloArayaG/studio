export const EXECUTIVE_OPTIONS = [
  'Sólo yo',
  '2 - 4',
  '5 - 10',
  '11 - 25',
  '26 +',
]

export const CONVERSATION_OPTIONS = [
  'Menos de 2,000',
  '2,000 - 10,000',
  '10,001 - 50,000',
  '50,000 +',
]

export const TOOL_OPTIONS = [
  'Shopify',
  'WooCommerce',
  'Vtex',
  'Magento',
  'HubSpot',
  'Salesforce',
  'Medilink',
  'Dentalink',
  'Reservo',
  'AgendaPro',
  'Otros',
]

const HUBSPOT_CONTACT_PORTAL_ID = '23480943'
const HUBSPOT_CONTACT_FORM_ID = '6fca809e-de67-4c44-b5d7-c38bdda50427'

const HUBSPOT_FIELD = {
  firstname: 'firstname',
  email: 'email',
  phone: 'phone',
  desafio: 'cul_es_tu_desafo_de_servicio_al_cliente',
  ejecutivos: 'cuantos_ejecutivos_de_atencion_hay_en_tu_empresa',
  conversaciones: 'cuantas_conversaciones_maneja_tu_empresa_mensualmente_',
  plataformas: 'que_plataformas_usas_actualmente',
  confirmo: 'confirmo_asistencia',
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim())
}

export function validateContactFormData(data) {
  if (!data || typeof data !== 'object') return false
  const d = data
  return (
    typeof d.nombre === 'string' &&
    d.nombre.trim().length > 1 &&
    typeof d.correo === 'string' &&
    isValidEmail(d.correo) &&
    typeof d.telefono === 'string' &&
    d.telefono.trim().length > 5 &&
    typeof d.conversaciones === 'string' &&
    CONVERSATION_OPTIONS.includes(d.conversaciones) &&
    typeof d.ejecutivos === 'string' &&
    EXECUTIVE_OPTIONS.includes(d.ejecutivos) &&
    typeof d.objetivos === 'string' &&
    d.objetivos.trim().length > 2 &&
    Array.isArray(d.herramientas) &&
    d.herramientas.length >= 1 &&
    d.herramientas.every(
      (t) => typeof t === 'string' && TOOL_OPTIONS.includes(t),
    )
  )
}

function toHubspotToolValue(tool) {
  return tool === 'Otros' ? 'Otro' : tool
}

function buildHubspotContactFields(data) {
  const fields = [
    { name: HUBSPOT_FIELD.firstname, value: data.nombre.trim() },
    { name: HUBSPOT_FIELD.email, value: data.correo.trim() },
    { name: HUBSPOT_FIELD.phone, value: data.telefono.trim() },
    { name: HUBSPOT_FIELD.desafio, value: data.objetivos.trim() },
    { name: HUBSPOT_FIELD.conversaciones, value: data.conversaciones },
    { name: HUBSPOT_FIELD.ejecutivos, value: data.ejecutivos },
    { name: HUBSPOT_FIELD.confirmo, value: 'true' },
  ]

  if (data.herramientas.length > 0) {
    fields.push({
      name: HUBSPOT_FIELD.plataformas,
      value: data.herramientas.map(toHubspotToolValue).join(';'),
    })
  }

  return fields
}

async function submitHubspotContactForm(data, context = {}) {
  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_CONTACT_PORTAL_ID}/${HUBSPOT_CONTACT_FORM_ID}`

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: buildHubspotContactFields(data),
      context: {
        pageUri: context.pageUri,
        pageName: context.pageName ?? 'Contacto',
        hutk: context.hutk,
      },
    }),
  })

  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(body || `HubSpot submission failed (${res.status})`)
  }

  return res.json()
}

export async function handleContactSubmit(body, opts = {}) {
  if (!validateContactFormData(body)) {
    return { ok: false, status: 400, message: 'Datos inválidos' }
  }

  const hutk = opts.cookieHeader
    ? opts.cookieHeader.match(/(?:^|;\s*)hubspotutk=([^;]+)/)?.[1]
    : undefined

  try {
    await submitHubspotContactForm(body, {
      pageUri: opts.pageUri,
      pageName: opts.pageName ?? 'Contacto',
      hutk,
    })
    return { ok: true, status: 200 }
  } catch (err) {
    console.error('HubSpot submit error:', err)
    return {
      ok: false,
      status: 502,
      message: 'No se pudo enviar. Revisa tu conexión e intenta de nuevo.',
    }
  }
}
