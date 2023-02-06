import { CSSProperties, ReactElement } from 'react'
import { useProduct } from '../hooks/useProduct'
import ProductContext from './ProductContext'
import styles from '../styles/styles.module.css'
import { Product } from '../interfaces/Product'

export interface Props {
  product: Product
  children?: ReactElement | ReactElement[]
  className?: string
  style?: CSSProperties
}

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { Provider } = ProductContext
  const { increaseByHandle, quantity } = useProduct({
    value: product.quantity
  })
  return (
    <>
      <Provider value={{ quantity, increaseByHandle, product }}>
        <div className={`${styles.productCard} ${className}`} style={style}>
          {children}
        </div>
      </Provider>
    </>
  )
}
