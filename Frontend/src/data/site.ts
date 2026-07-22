// Central place for company details and product catalog.
// Update values here and they propagate across the whole site.

export const company = {
  name: 'ILAHI CO.',
  tagline: 'Purity in Every Drop',
  registeredOffice:
    'J-3/190, Second Floor, Rajouri Garden, West Delhi, Delhi – 110027',
  email: 'prabh4362.ps@gmail.com',
  mobile: '+91 97177 95957',
  mobileHref: '+919717795957',
}

export type Product = {
  slug: string
  name: string
  short: string
  description: string
  highlights: string[]
  /** Emoji used as a lightweight placeholder visual until real photography is added. */
  icon: string
  accent: string
}

export const products: Product[] = [
  {
    slug: 'olive-oil',
    name: 'Olive Oil Range',
    short: 'Extra virgin & pomace grades for everyday and gourmet cooking.',
    description:
      'Our Olive Oil range is cold-pressed and carefully selected to retain its natural aroma, antioxidants and heart-healthy fats. Available across extra virgin, virgin and pomace grades to suit dressings, sautéing and deep frying.',
    highlights: [
      'Cold-pressed, rich in antioxidants',
      'Extra virgin, virgin & pomace grades',
      'Ideal for salads, sautéing & frying',
    ],
    icon: '🫒',
    accent: '#5c7a29',
  },
  {
    slug: 'mustard-oil',
    name: 'Mustard Oil',
    short: 'Pungent, kachi ghani cold-pressed oil trusted in Indian kitchens.',
    description:
      'Traditional kachi ghani (cold-pressed) Mustard Oil with its signature pungency and deep golden colour. A staple across Indian cuisine, valued for its bold flavour and natural preservative qualities.',
    highlights: [
      'Kachi ghani cold-pressed',
      'Strong aroma & authentic flavour',
      'A timeless Indian kitchen essential',
    ],
    icon: '🌿',
    accent: '#b8860b',
  },
  {
    slug: 'sunflower-oil',
    name: 'Sunflower Oil',
    short: 'Light, refined and heart-friendly for daily cooking.',
    description:
      'Refined Sunflower Oil is light in taste and high in Vitamin E and polyunsaturated fats. Its neutral flavour and high smoke point make it a versatile choice for everyday frying, baking and sautéing.',
    highlights: [
      'Light & neutral in taste',
      'High in Vitamin E',
      'High smoke point for frying',
    ],
    icon: '🌻',
    accent: '#d99a00',
  },
  {
    slug: 'soybean-oil',
    name: 'Soybean Oil',
    short: 'Versatile, protein-derived oil for wholesome cooking.',
    description:
      'Refined Soybean Oil is a well-balanced cooking oil rich in essential fatty acids and Omega-3. Economical and versatile, it is suited to all-round household and commercial cooking needs.',
    highlights: [
      'Rich in essential fatty acids',
      'Balanced Omega-3 & Omega-6',
      'Everyday, all-purpose cooking',
    ],
    icon: '🌱',
    accent: '#6b8e23',
  },
]

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact Us' },
]
