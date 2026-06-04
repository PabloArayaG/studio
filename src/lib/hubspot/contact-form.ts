export type ContactFormData = {
  nombre: string
  telefono: string
  correo: string
  conversaciones: string
  ejecutivos: string
  objetivos: string
  herramientas: string[]
}

export const EXECUTIVE_OPTIONS = [
  'Sólo yo',
  '2 - 4',
  '5 - 10',
  '11 - 25',
  '26 +',
] as const

export const CONVERSATION_OPTIONS = [
  'Menos de 2,000',
  '2,000 - 10,000',
  '10,001 - 50,000',
  '50,000 +',
] as const

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
  'Otros', // UI label; HubSpot internal value: Otro
] as const

/** Valor interno HubSpot para la opción "Otros" */
export const HUBSPOT_TOOL_OTRO_VALUE = 'Otro'

export const HUBSPOT_CONTACT_PORTAL_ID = '23480943'
export const HUBSPOT_CONTACT_FORM_ID = '6fca809e-de67-4c44-b5d7-c38bdda50427'

export const HUBSPOT_FIELD = {
  firstname: 'firstname',
  email: 'email',
  phone: 'phone',
  desafio: 'cul_es_tu_desafo_de_servicio_al_cliente',
  ejecutivos: 'cuantos_ejecutivos_de_atencion_hay_en_tu_empresa',
  conversaciones: 'cuantas_conversaciones_maneja_tu_empresa_mensualmente_',
  plataformas: 'que_plataformas_usas_actualmente',
  confirmo: 'confirmo_asistencia',
} as const

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

export function validateContactFormData(data: unknown): data is ContactFormData {
  if (!data || typeof data !== 'object') return false
  const d = data as Record<string, unknown>
  return (
    typeof d.nombre === 'string' &&
    d.nombre.trim().length > 1 &&
    typeof d.correo === 'string' &&
    isValidEmail(d.correo) &&
    typeof d.telefono === 'string' &&
    d.telefono.trim().length > 5 &&
    typeof d.conversaciones === 'string' &&
    (CONVERSATION_OPTIONS as readonly string[]).includes(d.conversaciones) &&
    typeof d.ejecutivos === 'string' &&
    (EXECUTIVE_OPTIONS as readonly string[]).includes(d.ejecutivos) &&
    typeof d.objetivos === 'string' &&
    d.objetivos.trim().length > 2 &&
    Array.isArray(d.herramientas) &&
    d.herramientas.length >= 1 &&
    d.herramientas.every(
      (t) => typeof t === 'string' && (TOOL_OPTIONS as readonly string[]).includes(t),
    )
  )
}
