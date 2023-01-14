import { useContext } from 'react'
import ProductContext from './ProductContext'
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export const ProductImage = ({
  image,
  title = ''
}: {
  title: string
  image?: string
}) => {
  const { product } = useContext(ProductContext)
  const selectedImage = image ? image : product.image
  const selectedAlt = title ? title : product.title
  return (
    <img
      src={selectedImage ?? noImage}
      alt={selectedAlt}
      className={styles.productImg}
    />
  )
}
