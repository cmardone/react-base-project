import { useEffect, useState } from 'react'
import { OnChangeArgs } from '../interfaces/OnChangeArgs'
import { Product } from '../interfaces/Product'

interface UseProductArgs {
  product: Product
  onChange?: (args: OnChangeArgs) => void
  value?: number
}

export const useProduct = ({
  onChange,
  product,
  value = 0
}: UseProductArgs) => {
  const [quantity, setQuantity] = useState(value)

  useEffect(() => {
    setQuantity(value)
  }, [value])

  const increaseByHandle = (value: number) => {
    const newValue = Math.max(quantity + value, 0)
    setQuantity(newValue)
    onChange && onChange({ product, count: newValue })
  }

  return { quantity, increaseByHandle }
}
