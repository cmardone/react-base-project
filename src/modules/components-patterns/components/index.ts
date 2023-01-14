import { ProductCard as ProductCardHOC } from './ProductCard'
import { ProductImage } from './ProductImage'
import { ProductTitle } from './ProductTitle'
import { ProductButtons } from './ProductButtons'
import { ProductCardHOCProps } from '../interfaces/ProductCardHOCProps'

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Buttons: ProductButtons,
  Image: ProductImage,
  Title: ProductTitle
})

export { ProductButtons, ProductImage, ProductTitle }

export default ProductCard
