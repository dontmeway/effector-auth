import { RouterProvider } from 'atomic-router-react'
import { router } from 'shared/routes'

export const withRouter = (component: () => React.ReactNode) => () => {
  return <RouterProvider router={router}>{component()}</RouterProvider>
}
