import { CSSProperties, useContext } from 'react'
import ProductContext from './ProductContext'
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export interface Props {
  title?: string
  image?: string
  className?: string
  style?: CSSProperties
}

export const ProductImage = ({
  image,
  className,
  style,
  title = 'image'
}: Props) => {
  const { product } = useContext(ProductContext)
  const selectedImage = image ? image : product.image
  const selectedAlt = title ? title : product.title
  return (
    <img
      src={selectedImage ?? noImage}
      alt={selectedAlt}
      className={`${styles.productImg} ${className}`}
      style={style}
    />
  )
}
