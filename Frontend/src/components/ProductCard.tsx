import type { Product } from '../data/site'

type Props = {
  product: Product
  detailed?: boolean
}

export default function ProductCard({ product, detailed = false }: Props) {
  return (
    <article className="card product">
      <div className="product__icon" style={{ background: product.accent }}>
        {product.icon}
      </div>
      <h3>{product.name}</h3>
      <p>{detailed ? product.description : product.short}</p>
      <ul>
        {product.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </article>
  )
}
