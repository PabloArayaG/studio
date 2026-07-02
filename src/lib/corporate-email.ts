export const FREE_EMAIL_PROVIDERS = [
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'aol.com',
  'zoho.com',
  'mail.com',
  'protonmail.com',
  'gmx.com',
  'yandex.com',
  'inbox.com',
  'icloud.com',
  'fastmail.com',
  'hushmail.com',
  'tutanota.com',
  'lycos.com',
  'rediffmail.com',
] as const

export function isValidEmailFormat(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

export function getEmailDomain(email: string): string | null {
  const trimmed = email.trim().toLowerCase()
  const at = trimmed.lastIndexOf('@')
  if (at <= 0 || at === trimmed.length - 1) return null
  return trimmed.slice(at + 1)
}

export function isFreeEmailDomain(domain: string) {
  const normalized = domain.trim().toLowerCase()
  return FREE_EMAIL_PROVIDERS.some(
    (provider) =>
      normalized === provider || normalized.startsWith(`${provider}.`),
  )
}

export function isCorporateEmail(email: string) {
  if (!isValidEmailFormat(email)) return false
  const domain = getEmailDomain(email)
  if (!domain) return false
  return !isFreeEmailDomain(domain)
}

export const CORPORATE_EMAIL_ERROR_MESSAGE =
  'Ingresa un correo corporativo. No aceptamos correos personales como Gmail u Outlook.'
