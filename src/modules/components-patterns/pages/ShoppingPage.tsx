import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle
} from '../components'
import { Product } from '../interfaces/Product'
import '../styles/custom-styles.css'

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
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image title={product.title} className="custom-image" />
          <ProductCard.Title className="text-white text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage
            title={product.title}
            image={product.image}
            className="custom-image"
          />
          <ProductTitle title="New Title" className="text-white text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard product={product} style={{ backgroundColor: '#ff0000' }}>
          <ProductImage title={product.title} image={product.image} />
          <ProductTitle title="New Title" />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  )
}
