import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes
} from 'react-router-dom'
import logo from '../assets/react.svg'
import { Lazyload1Page, Lazyload2Page, Lazyload3Page } from '../modules/lazyload/pages'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img
            src={logo}
            alt="React Logo"
            style={{ marginTop: '10px', height: '100px' }}
          />
          <ul>
            <li>
              <NavLink
                to="lazy1"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Lazyload 1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="lazy2"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Lazyload 2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="lazy3"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Lazyload 3
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/lazy1" element={<Lazyload1Page />} />
          <Route path="/lazy2" element={<Lazyload2Page />} />
          <Route path="/lazy3" element={<Lazyload3Page />} />
          <Route path="/*" element={<Navigate to="/lazy1" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
