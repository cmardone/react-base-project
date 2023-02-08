import { CSSProperties, ReactElement } from 'react'
import { useProduct } from '../hooks/useProduct'
import ProductContext from './ProductContext'
import styles from '../styles/styles.module.css'
import { Product } from '../interfaces/Product'
import { OnChangeArgs } from '../interfaces/OnChangeArgs'

export interface Props {
  product: Product
  children?: ReactElement | ReactElement[]
  className?: string
  style?: CSSProperties
  value?: number
  onChange?: (args: OnChangeArgs) => void
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  value,
  onChange
}: Props) => {
  const { Provider } = ProductContext
  const { increaseByHandle, quantity } = useProduct({
    product,
    onChange,
    value
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
