import { createHistoryRouter } from 'atomic-router'
import { createBrowserHistory } from 'history'
import { homeRoute } from 'pages/home'
import { loginRoute } from 'pages/login'

export const routes = [
  {
    path: '/',
    route: homeRoute,
  },
  {
    path: '/login',
    route: loginRoute,
  },
]

export const router = createHistoryRouter({ routes })
const history = createBrowserHistory()

router.setHistory(history)
