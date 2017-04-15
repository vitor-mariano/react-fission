import { Component } from 'react'
import { Route } from 'react-router-dom'

class Routes extends Component {
  render() {
    return (
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
  }
}

export default Routes
