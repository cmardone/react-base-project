import { createContext } from 'react'
import { Product } from '../interfaces/Product'

interface ProductContextProps {
  quantity: number
  increaseByHandle: (value: number) => void
  product: Product
}
const ProductContext = createContext({} as ProductContextProps)

export default ProductContext
