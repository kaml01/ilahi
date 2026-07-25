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
  /** Emoji shown when no product photo is available yet. */
  icon: string
  accent: string
  /** Optional pack-shot image (served from /public). Falls back to `icon`. */
  image?: string
  /** Pack size shown on the shop card, e.g. "1 L" or "500 ml". */
  pack: string
  /** Selling price in ₹. */
  price: number
  /** Maximum retail price in ₹ (shown struck-through). */
  mrp: number
  /** Whether the item is currently out of stock. */
  soldOut: boolean
  /** True for a pack variant (e.g. tin) — shown on Products but not the Home range. */
  packVariant?: boolean
  /** Long marketplace-style title shown on the product detail popup. */
  title?: string
  /** Average star rating out of 5. */
  rating?: number
  /** Number of ratings. */
  ratingCount?: number
  /** Price per unit label, e.g. "₹765.00 / l". */
  perUnit?: string
  /** Best-before / use-by date. */
  useBy?: string
  /** "About this product" benefit bullets shown in the detail popup. */
  benefits?: string[]
}

// Pomace benefits are shared by the bottle and the tin (same oil).
const pomaceBenefits = [
  'Gluten-free',
  'Good for scalp treatment',
  'Retains its nutrients when heated, keeping food healthy — ideal for cooking',
  'Used as a massage oil, gives healthy and smooth skin',
  'Light flavour & aroma — ensures minimal change in the taste of your dish',
  'Vitamin E shields the body from infections and helps faster healing',
  'Low cholesterol content',
  'Vitamin K improves bone density and strength',
  'Rich in MUFA and essential vitamins — adds good fat and lowers the effects of bad cholesterol',
  'Storage: keep in a cool, dry & hygienic place, away from direct heat & light',
]

export const products: Product[] = [
  {
    slug: 'extra-virgin-olive-oil',
    name: 'Extra Virgin Olive Oil',
    title:
      'ILAHI Extra Virgin Olive Oil 1 Litre | Imported from Spain | Contains Vitamin E | Low in Saturated Fat | Natural Cooking Oil | Ideal for Dressings, Salad, Soups, Dips & Marinades',
    short: 'Imported from Spain — for salads, dressings & marinades.',
    description:
      'ILAHI Extra Virgin Olive Oil is imported from the farms of Spain and cold-pressed to retain its natural aroma, antioxidants and Vitamin E. Low in saturated fat, it is a natural cooking oil ideal for dressings, salads, soups, dips and marinades.',
    highlights: [
      'Imported from Spain',
      'Contains Vitamin E, low in saturated fat',
      'Ideal for dressings, salads & marinades',
    ],
    icon: '🫒',
    accent: '#5c7a29',
    image: '/images/extra-virgin-olive-oil.png',
    pack: '1 L (Pack of 1)',
    price: 765,
    mrp: 1798,
    perUnit: '₹765.00 / l',
    rating: 4.7,
    ratingCount: 1878,
    useBy: '10 Jun 2028',
    soldOut: true,
    benefits: [
      'Reduces heart problems & diabetes',
      'Improves blood cholesterol levels',
      'Assists in weight loss',
      'Improves digestion',
      'Protects against diabetes',
      'Works as an anti-inflammatory',
      'Protects against insulin resistance',
      'Reduces high blood pressure',
      'Protects against hypertension',
      'Ideal for garnishing & salad dressing — can also be used for hair and skin care',
    ],
  },
  {
    slug: 'pomace-olive-oil',
    name: 'Pomace Olive Oil',
    title:
      'ILAHI Daily Cooking Pomace Olive Oil 1 Litre | Imported from Spain | Rich in Monounsaturated Fatty Acids (MUFA) | Low in Saturated Fat | Ideal for Roasting, Frying and Baking',
    short: 'Imported from Spain — everyday cooking, frying & baking.',
    description:
      'ILAHI Daily Cooking Pomace Olive Oil is imported from Spain and rich in Monounsaturated Fatty Acids (MUFA). Low in saturated fat, it is ideal for everyday roasting, frying and baking across Indian and Western cuisines.',
    highlights: [
      'Imported from Spain',
      'Rich in MUFA, low in saturated fat',
      'Ideal for roasting, frying & baking',
    ],
    icon: '🫒',
    accent: '#2f6b3c',
    image: '/images/pomace-olive-oil-bottle.png',
    pack: '1 L (Pack of 1)',
    price: 419,
    mrp: 649,
    perUnit: '₹419.00 / l',
    rating: 4.3,
    ratingCount: 2695,
    useBy: '02 Jan 2027',
    soldOut: true,
    benefits: pomaceBenefits,
  },
  {
    slug: 'mustard-oil',
    name: 'Mustard Oil',
    title:
      'ILAHI Cold Pressed Kachi Ghani Chemical Free Mustard Daily Cooking Oil, 1 Litre | Recommended for Roasting, Frying & Baking — All Types of Cuisines',
    short: 'Cold pressed kachi ghani — chemical-free daily cooking oil.',
    description:
      'ILAHI Cold Pressed Kachi Ghani Mustard Oil is chemical-free and made for daily cooking. With its signature pungency, it is recommended for roasting, frying and baking across all types of cuisines.',
    highlights: [
      'Cold pressed kachi ghani',
      'Chemical free',
      'For roasting, frying & baking',
    ],
    icon: '🌿',
    accent: '#b8860b',
    image: '/images/mustard-oil.png',
    pack: '1 Litre (Pack of 1)',
    price: 155,
    mrp: 255,
    perUnit: '₹155.00 / l',
    rating: 4.0,
    ratingCount: 5047,
    useBy: '11 Nov 2026',
    soldOut: true,
    benefits: [
      'Packed with essential nutrients thanks to the cold-pressed (kachi ghani) technique',
      'A great addition to your kitchen and for your health',
    ],
  },
  {
    slug: 'pomace-olive-oil-tin',
    name: 'Pomace Olive Oil (Tin)',
    title:
      'ILAHI Pomace Olive Oil 5 Litre Tin for Everyday Cooking | Imported from Spain | Recommended for Roasting, Frying & Baking All Types of Cuisines | Rich in MUFA | Low in Saturated Fat',
    short: 'Value 5L tin — imported from Spain, for all cuisines.',
    description:
      'ILAHI Pomace Olive Oil in a value 5-litre tin for everyday cooking. Imported from Spain and rich in MUFA, it is recommended for roasting, frying and baking across all types of cuisines. Low in saturated fat.',
    highlights: [
      'Economical 5L bulk tin',
      'Imported from Spain, rich in MUFA',
      'For roasting, frying & baking',
    ],
    icon: '🫒',
    accent: '#2f6b3c',
    image: '/images/pomace-olive-oil-tin.png',
    pack: '5 L Tin',
    price: 1699,
    mrp: 4999,
    perUnit: '₹339.80 / l',
    rating: 4.2,
    ratingCount: 2983,
    useBy: '01 Dec 2026',
    soldOut: true,
    packVariant: true,
    benefits: pomaceBenefits,
  },
]

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact Us' },
]
