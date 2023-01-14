import { LazyExoticComponent, lazy } from 'react'

type JSXComponent = () => JSX.Element
interface Route {
  to: string
  path: string
  name: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
}

const lazy1 = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLoad1" */ '../modules/lazyload/pages/Lazyload1Page'
    )
)
const lazy2 = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLoad2" */ '../modules/lazyload/pages/Lazyload2Page'
    )
)
const lazy3 = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLoad3" */ '../modules/lazyload/pages/Lazyload3Page'
    )
)

export const routes: Route[] = [
  { to: '/lazy1', path: 'lazy1', name: 'Lazyload 1', Component: lazy1 },
  { to: '/lazy2', path: 'lazy2', name: 'Lazyload 2', Component: lazy2 },
  { to: '/lazy3', path: 'lazy3', name: 'Lazyload 3', Component: lazy3 }
]
