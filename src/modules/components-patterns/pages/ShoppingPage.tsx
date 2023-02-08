import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle
} from '../components'
import '../styles/custom-styles.css'
import { useShoppingCart } from '../hooks/useShoppingCart'
import { products } from '../data/products'

export const ShoppingPage = () => {
  const { shoppingCart, onProductChangeHandle } = useShoppingCart()
  /*   const [shoppingCart, setshoppingCart] = useState<{
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

      /*
      if (count === 0) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [product.id]: toDelete, ...rest } = current
        return rest
      }
      return {
        ...current,
        [product.id]: { ...product, count }
      }
      * /
    })
  } */
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div className="product-cards-wrapper">
        {products.map((prod) => (
          <ProductCard
            product={prod}
            className="bg-dark text-white"
            key={`product-${prod.id}`}
            onChange={onProductChangeHandle}
            value={shoppingCart[prod.id]?.count ?? 0}
          >
            <ProductImage
              title={prod.title}
              image={prod.image}
              className="custom-image"
            />
            <ProductTitle title={prod.title} className="text-white text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.keys(shoppingCart).map((id: string) => (
          <ProductCard
            product={shoppingCart[id]}
            className="bg-dark text-white"
            style={{ width: '100px' }}
            key={id}
            onChange={onProductChangeHandle}
            value={shoppingCart[id].count}
          >
            <ProductImage className="custom-image" />
            <ProductButtons
              className="custom-buttons"
              style={{ display: 'flex', justifyContent: 'center' }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  )
}
