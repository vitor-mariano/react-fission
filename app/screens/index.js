import { render } from 'react-dom'
import {
  Route,
  Router
} from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from '../redux/store'
import '../appearance/main.scss'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route
        component={require('./home/Home').default}
        path='/'
      />
    </Router>
  </Provider>
)

render(router, document.getElementById('app'))
