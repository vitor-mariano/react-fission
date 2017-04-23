import React from 'react';
import { Route } from 'react-router-dom';

export default function Routes() {
  return (
    <section>
      {/* eslint-disable */}
      <Route
        component={require('../Home/').default}
        exact path="/"
      />
      <Route
        component={require('../Todos/').default}
        path="/todos"
      />
      <Route
        component={require('../Profile/').default}
        path="/profile"
      />
      {/* eslint-enable */}
    </section>
  );
}
