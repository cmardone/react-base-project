import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import { Lazyload1Page, Lazyload2Page, Lazyload3Page } from '../pages'

export const LazyLayout = () => {
  return (
    <div>
      <h1>Lazy Layout</h1>
      <ul>
        <li>
          <NavLink to="lazy1">Lazy 1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">Lazy 2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">Lazy 3</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="lazy1" element={<Lazyload1Page />} />
        <Route path="lazy2" element={<Lazyload2Page />} />
        <Route path="lazy3" element={<Lazyload3Page />} />
        <Route path="*" element={<Navigate replace to="lazy1" />} />
      </Routes>
    </div>
  )
}

export default LazyLayout
