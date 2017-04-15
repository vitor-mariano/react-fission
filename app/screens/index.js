import { render } from 'react-dom'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { history } from '../redux/store'
import App from './root/App'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
)

render(router, document.getElementById('app'))
