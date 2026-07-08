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

/** Dominios personales con errores tipográficos o TLD incorrecto. */
const BLOCKED_TYPO_DOMAINS = [
  'gmail.co',
  'gmai.co',
  'gmai.com',
  'gmial.com',
  'gmil.com',
  'gmaill.com',
  'hotmial.com',
  'hotmal.com',
  'outlok.com',
  'outllok.com',
  'yaho.com',
  'yahooo.com',
] as const

const SUSPICIOUS_TLDS = new Set(['co', 'cm', 'con', 'comm', 'om', 'cmo', 'cim'])

export function isValidEmailFormat(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

export function getEmailDomain(email: string): string | null {
  const trimmed = email.trim().toLowerCase()
  const at = trimmed.lastIndexOf('@')
  if (at <= 0 || at === trimmed.length - 1) return null
  return trimmed.slice(at + 1)
}

function levenshtein(a: string, b: string): number {
  const rows = a.length + 1
  const cols = b.length + 1
  const matrix = Array.from({ length: rows }, () => Array<number>(cols).fill(0))

  for (let i = 0; i < rows; i++) matrix[i][0] = i
  for (let j = 0; j < cols; j++) matrix[0][j] = j

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost,
      )
    }
  }

  return matrix[a.length][b.length]
}

function getDomainParts(domain: string) {
  const parts = domain.trim().toLowerCase().split('.')
  if (parts.length < 2) return null
  return {
    hostBase: parts[parts.length - 2],
    tld: parts[parts.length - 1],
  }
}

function isFreeProviderTypoDomain(domain: string) {
  const normalized = domain.trim().toLowerCase()

  if (BLOCKED_TYPO_DOMAINS.includes(normalized as (typeof BLOCKED_TYPO_DOMAINS)[number])) {
    return true
  }

  const parts = getDomainParts(normalized)
  if (!parts) return false

  const { hostBase, tld } = parts

  for (const provider of FREE_EMAIL_PROVIDERS) {
    const dot = provider.indexOf('.')
    const providerBase = provider.slice(0, dot)
    const providerTld = provider.slice(dot + 1)

    if (hostBase === providerBase && tld !== providerTld) {
      return true
    }

    if (providerBase.length >= 5 && levenshtein(hostBase, providerBase) === 1) {
      return true
    }

    if (
      providerBase.length >= 4 &&
      levenshtein(hostBase, providerBase) === 1 &&
      SUSPICIOUS_TLDS.has(tld)
    ) {
      return true
    }
  }

  return false
}

export function isFreeEmailDomain(domain: string) {
  const normalized = domain.trim().toLowerCase()

  return (
    FREE_EMAIL_PROVIDERS.some(
      (provider) =>
        normalized === provider || normalized.startsWith(`${provider}.`),
    ) || isFreeProviderTypoDomain(normalized)
  )
}

export function isCorporateEmail(email: string) {
  if (!isValidEmailFormat(email)) return false
  const domain = getEmailDomain(email)
  if (!domain) return false
  return !isFreeEmailDomain(domain)
}

export const CORPORATE_EMAIL_ERROR_MESSAGE =
  'Debes usar un correo corporativo. No aceptamos correos personales como Gmail, Outlook o Yahoo.'
