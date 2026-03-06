/**
 * Premium / Monetization configuration
 *
 * To activate payments:
 * 1. Create a Lemon Squeezy account at https://lemonsqueezy.com
 * 2. Create a product for "Barista Roadmap Pro"
 * 3. Get your checkout URL from the product page
 * 4. Replace the checkoutUrl below with your actual URL
 * 5. Set enabled to true
 */

export const premiumConfig = {
  /** Whether payments are active (set to true when Lemon Squeezy is configured) */
  enabled: false,

  /** Lemon Squeezy overlay checkout URL */
  checkoutUrl: 'https://yourstore.lemonsqueezy.com/checkout/buy/your-product-id',

  /** Price display (for UI only — actual price is set in Lemon Squeezy) */
  price: {
    amount: 19,
    currency: 'USD',
    display: {
      es: '$19 USD',
      en: '$19 USD',
    }
  },

  /** Number of premium lessons */
  premiumLessonCount: 29,

  /** Total phases available */
  totalPhases: 9,

  /** Free phases (no gate) */
  freePhases: [1, 2],
}
