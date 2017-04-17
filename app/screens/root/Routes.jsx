import React from 'react';
import { Route } from 'react-router-dom';

function Routes() {
  return (
    <section>
      {/* eslint-disable */}
      <Route
        component={require('../home/HomeScreen').default}
        exact path="/"
      />
      <Route
        component={require('../github/GitHubScreen').default}
        path="/github"
      />
      {/* eslint-enable */}
    </section>
  );
}

export default Routes;
