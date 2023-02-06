import { CSSProperties, useContext } from 'react'
import ProductContext from './ProductContext'
import styles from '../styles/styles.module.css'

export interface Props {
  className?: string
  style?: CSSProperties
}

export const ProductButtons = ({ className, style }: Props) => {
  const { increaseByHandle, quantity } = useContext(ProductContext)

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button
        type="button"
        className={styles.buttonMinus}
        onClick={() => increaseByHandle(-1)}
        disabled={quantity <= 0}
      >
        -
      </button>
      <div className={styles.countLabel}>{quantity}</div>
      <button
        type="button"
        className={styles.buttonAdd}
        onClick={() => increaseByHandle(1)}
      >
        +
      </button>
    </div>
  )
}
