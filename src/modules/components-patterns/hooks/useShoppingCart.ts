import { useState } from 'react'
import { Product, ProductInCart } from '../interfaces'

export const useShoppingCart = () => {
  const [shoppingCart, setshoppingCart] = useState<{
    [key: string]: ProductInCart
  }>({})

  const onProductChangeHandle = ({
    product,
    count
  }: {
    product: Product
    count: number
  }) => {
    setshoppingCart((current) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = current
        return rest
      }
      return {
        ...current,
        [product.id]: { ...product, count }
      }
    })
  }

  return {
    shoppingCart,
    onProductChangeHandle
  }
}
