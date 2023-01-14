import { useContext } from 'react'
import ProductContext from './ProductContext'
import styles from '../styles/styles.module.css'

export const ProductButtons = () => {
  const { increaseByHandle, quantity } = useContext(ProductContext)

  return (
    <div className={styles.buttonsContainer}>
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
