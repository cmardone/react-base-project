import { useState } from 'react'

interface Props {
  value?: number
}

export const useProduct = ({ value = 0 }: Props) => {
  const [quantity, setQuantity] = useState(value)

  const increaseByHandle = (value: number) =>
    setQuantity(Math.max(quantity + value, 0))

  return { quantity, increaseByHandle }
}
