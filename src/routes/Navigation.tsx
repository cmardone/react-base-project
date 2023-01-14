import { Suspense } from 'react'
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes
} from 'react-router-dom'
import { routes } from './routes'
import logo from '../assets/react.svg'
import styles from './Navigation.module.css'

export const Navigation = () => {
  return (
    <Suspense fallback={<h4>Loading...</h4>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" className={styles.image} />
            <ul>
              {routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
