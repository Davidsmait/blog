/**
 * Premium license management for Barista Roadmap
 * Stores and validates license keys in localStorage
 */

const STORAGE_KEY = 'barista_pro_license'
const STORAGE_EMAIL_KEY = 'barista_pro_email'

export function isPurchased(): boolean {
  if (typeof localStorage === 'undefined') return false
  return !!localStorage.getItem(STORAGE_KEY)
}

export function getLicenseKey(): string | null {
  if (typeof localStorage === 'undefined') return null
  return localStorage.getItem(STORAGE_KEY)
}

export function saveLicense(key: string): void {
  if (typeof localStorage === 'undefined') return
  localStorage.setItem(STORAGE_KEY, key)
  document.dispatchEvent(new CustomEvent('premium:unlocked'))
}

export function clearLicense(): void {
  if (typeof localStorage === 'undefined') return
  localStorage.removeItem(STORAGE_KEY)
}

export function saveEmail(email: string): void {
  if (typeof localStorage === 'undefined') return
  localStorage.setItem(STORAGE_EMAIL_KEY, email)
}

export function getSavedEmail(): string | null {
  if (typeof localStorage === 'undefined') return null
  return localStorage.getItem(STORAGE_EMAIL_KEY)
}

/**
 * Validate license key against Netlify Function (optional)
 * Falls back to basic format check if function is unavailable
 */
export async function validateLicense(key: string): Promise<boolean> {
  // Basic format check (Lemon Squeezy license keys are UUIDs)
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
  if (!uuidRegex.test(key)) return false

  // Try server-side validation if available
  try {
    const res = await fetch('/.netlify/functions/validate-license', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ license_key: key })
    })
    if (res.ok) {
      const data = await res.json()
      return data.valid === true
    }
    // Server responded with error — reject
    return false
  } catch {
    // Netlify Function not available — reject (don't accept by default)
    return false
  }
}

/**
 * Unlock premium content on the current page
 */
export function unlockPageContent(): void {
  const gate = document.querySelector('[data-premium-gate]') as HTMLElement
  const content = document.querySelector('[data-premium-content]') as HTMLElement
  if (gate) gate.style.display = 'none'
  if (content) {
    content.classList.remove('premium-locked')
    content.style.filter = ''
    content.style.maxHeight = ''
    content.style.overflow = ''
  }
}
