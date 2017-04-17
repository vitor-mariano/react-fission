import React from 'react';
import { Route } from 'react-router-dom';

export default function Routes() {
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
