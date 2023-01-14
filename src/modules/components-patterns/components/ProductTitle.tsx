import { useContext } from 'react'
import ProductContext from './ProductContext'
import styles from '../styles/styles.module.css'

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext)
  const selectedTitle = title ? title : product.title
  return (
    <span className={styles.productDescription}>
      {selectedTitle ?? 'No title'}
    </span>
  )
}
