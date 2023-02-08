import { useEffect, useRef, useState } from 'react'
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

  const isControlled = useRef(!!onChange)

  useEffect(() => {
    setQuantity(value)
  }, [value])

  const increaseByHandle = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product })
    }
    const newValue = Math.max(quantity + value, 0)
    setQuantity(newValue)
    onChange && onChange({ product, count: newValue })
  }

  return { quantity, increaseByHandle }
}
