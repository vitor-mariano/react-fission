import { Route } from 'react-router-dom'

const routes = (
  <Route
    component={require('../home/HomeScreen').default}
    path='/'
  />
)

export default routes
