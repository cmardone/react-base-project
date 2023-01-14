import { ProductCardProps } from './ProductCardProps'

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element
  Image: ({ title, image }: { title: string; image?: string }) => JSX.Element
  Title: ({ title }: { title?: string }) => JSX.Element
  Buttons: () => JSX.Element
}
