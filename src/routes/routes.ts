import {
  Lazyload1Page,
  Lazyload2Page,
  Lazyload3Page
} from '../modules/lazyload/pages'

interface Route {
  to: string
  path: string
  name: string
  Component: () => JSX.Element
}

export const routes: Route[] = [
  { to: '/lazy1', path: 'lazy1', name: 'Lazyload 1', Component: Lazyload1Page },
  { to: '/lazy2', path: 'lazy2', name: 'Lazyload 2', Component: Lazyload2Page },
  { to: '/lazy3', path: 'lazy3', name: 'Lazyload 3', Component: Lazyload3Page }
]
