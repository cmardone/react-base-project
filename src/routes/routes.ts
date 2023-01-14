import { LazyExoticComponent, lazy } from 'react'
import { NoLazyloadPage } from '../modules/lazyload/pages'

type JSXComponent = () => JSX.Element

interface Route {
  to: string
  path: string
  name: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
}

const lazyLayout = lazy(() => import('../modules/lazyload/layout/LazyLayout'))

export const routes: Route[] = [
  {
    to: '/lazyload',
    path: '/lazyload/*',
    name: 'Lazyload',
    Component: lazyLayout
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    name: 'No Lazyload',
    Component: NoLazyloadPage
  }
]
