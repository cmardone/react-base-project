import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle
} from '../components'
import { Product } from '../interfaces/Product'

const product: Product = {
  id: '1',
  title: 'New Coffee Mug',
  image: '/src/assets/coffee-mug.png',
  quantity: 5
}
export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div className="product-card-wrapper">
        <ProductCard product={product}>
          <ProductCard.Image title={product.title} />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage title={product.title} image={product.image} />
          <ProductTitle title="New Title" />
          <ProductButtons />
        </ProductCard>
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </div>
    </div>
  )
}
