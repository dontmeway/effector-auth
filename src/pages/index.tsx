import { Route, RouterProvider } from 'atomic-router-react'
import { router } from 'shared/routes'
import { Home, homeRoute } from './home'
import { Login, loginRoute } from './login'

export const Routing = () => {
  return (
    <RouterProvider router={router}>
      <Route route={homeRoute} view={Home} />
      <Route route={loginRoute} view={Login} />
    </RouterProvider>
  )
}
