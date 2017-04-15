import {
  Link,
  BrowserRouter as Router
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { history } from '../../redux/store'
import '../../appearance/main.scss'

const root = (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='github'>GitHub</Link>
          </li>
        </ul>
        {require('./routes').default}
      </div>
    </Router>
  </Provider>
)

export default root
