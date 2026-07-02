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
]

export function isValidEmailFormat(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim())
}

export function getEmailDomain(email) {
  const trimmed = String(email).trim().toLowerCase()
  const at = trimmed.lastIndexOf('@')
  if (at <= 0 || at === trimmed.length - 1) return null
  return trimmed.slice(at + 1)
}

export function isFreeEmailDomain(domain) {
  const normalized = String(domain).trim().toLowerCase()
  return FREE_EMAIL_PROVIDERS.some(
    (provider) =>
      normalized === provider || normalized.startsWith(`${provider}.`),
  )
}

export function isCorporateEmail(email) {
  if (!isValidEmailFormat(email)) return false
  const domain = getEmailDomain(email)
  if (!domain) return false
  return !isFreeEmailDomain(domain)
}
