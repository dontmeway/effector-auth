import { Routing } from 'pages'
import './index.css'
import { withProviders } from './providers'

export const App = () => {
  return (
    <div className="App">
      <Routing />
    </div>
  )
}

export default withProviders(App)
