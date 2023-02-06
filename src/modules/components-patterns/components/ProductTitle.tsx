import { CSSProperties, useContext } from 'react'
import ProductContext from './ProductContext'
import styles from '../styles/styles.module.css'

export interface Props {
  title?: string
  className?: string
  style?: CSSProperties
}

export const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(ProductContext)
  const selectedTitle = title ? title : product.title
  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {selectedTitle ?? 'No title'}
    </span>
  )
}
