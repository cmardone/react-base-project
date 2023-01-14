import { ReactElement } from 'react'
import { Product } from './Product'

export interface ProductCardProps {
  product: Product
  children?: ReactElement | ReactElement[]
}
