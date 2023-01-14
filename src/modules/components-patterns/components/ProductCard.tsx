import { useProduct } from '../hooks/useProduct'
import ProductContext from './ProductContext'
import { ProductCardProps } from '../interfaces/ProductCardProps'
import styles from '../styles/styles.module.css'

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { Provider } = ProductContext
  const { increaseByHandle, quantity } = useProduct({
    value: product.quantity
  })
  return (
    <>
      <Provider value={{ quantity, increaseByHandle, product }}>
        <div className={styles.productCard}>{children}</div>
      </Provider>
    </>
  )
}
