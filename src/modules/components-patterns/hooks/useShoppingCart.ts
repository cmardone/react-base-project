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
      const productInCart: ProductInCart = current[product.id] || {
        ...product,
        count: 0
      }
      // If exists, change count
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count
        return {
          ...current,
          [product.id]: productInCart
        }
      }
      // Else, delete it
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [product.id]: toDelete, ...rest } = current
      return rest
    })
  }

  return {
    shoppingCart,
    onProductChangeHandle
  }
}
