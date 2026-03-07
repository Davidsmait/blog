/**
 * Lemon Squeezy Overlay Checkout integration
 * Docs: https://docs.lemonsqueezy.com/help/checkout/overlay-checkout
 */

declare global {
  interface Window {
    createLemonSqueezy?: () => void
    LemonSqueezy?: {
      Url: {
        Open: (url: string) => void
        Close: () => void
      }
      Setup: (config: {
        eventHandler: (event: LemonSqueezyEvent) => void
      }) => void
    }
  }
}

interface LemonSqueezyEvent {
  event: string
  data?: {
    order?: {
      data?: {
        attributes?: {
          first_order_item?: {
            product_name?: string
          }
        }
      }
    }
    urls?: {
      receipt?: string
    }
  }
}

const SCRIPT_URL = 'https://app.lemonsqueezy.com/js/lemon.js'

let scriptLoaded = false
let scriptLoading = false

/**
 * Load the Lemon Squeezy JS script
 */
export function loadLemonSqueezy(): Promise<void> {
  if (scriptLoaded) return Promise.resolve()
  if (scriptLoading) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        clearInterval(check)
        reject(new Error('Lemon Squeezy script loading timeout'))
      }, 10000)
      const check = setInterval(() => {
        if (scriptLoaded) {
          clearInterval(check)
          clearTimeout(timeout)
          resolve()
        }
      }, 100)
    })
  }

  scriptLoading = true
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = SCRIPT_URL
    script.defer = true
    script.onload = () => {
      scriptLoaded = true
      scriptLoading = false
      window.createLemonSqueezy?.()
      resolve()
    }
    script.onerror = () => {
      scriptLoading = false
      reject(new Error('Failed to load Lemon Squeezy'))
    }
    document.head.appendChild(script)
  })
}

/**
 * Open Lemon Squeezy overlay checkout
 * @param checkoutUrl - Full Lemon Squeezy checkout URL (e.g., https://yourstore.lemonsqueezy.com/checkout/buy/xxx)
 * @param onSuccess - Callback when purchase is completed
 */
export async function openCheckout(
  checkoutUrl: string,
  onSuccess?: () => void
): Promise<void> {
  await loadLemonSqueezy()

  if (!window.LemonSqueezy) {
    // Fallback: open in new tab
    window.open(checkoutUrl, '_blank')
    return
  }

  window.LemonSqueezy.Setup({
    eventHandler: (event) => {
      if (event.event === 'Checkout.Success') {
        onSuccess?.()
      }
    }
  })

  window.LemonSqueezy.Url.Open(checkoutUrl)
}

/**
 * Get the checkout URL with optional prefilled email
 */
export function getCheckoutUrl(baseUrl: string, email?: string): string {
  if (!email) return baseUrl
  const url = new URL(baseUrl)
  url.searchParams.set('checkout[email]', email)
  return url.toString()
}
