import { Route } from 'react-router-dom'

const routes = (
  <section>
    <Route
      component={require('../home/HomeScreen').default}
      exact path='/'
    />
    <Route
      component={require('../github/GitHubScreen').default}
      path='/github'
    />
  </section>
)

export default routes
