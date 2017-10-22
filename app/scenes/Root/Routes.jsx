import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default function Routes() {
  return (
    <Switch>
      {/* eslint-disable global-require */}
      <Route
        component={require('../Home/').default}
        exact
        path="/"
      />
      <Route
        component={require('../Todos/').default}
        path="/todos"
      />
      <Route
        component={require('../Profile/resolver').default}
        path="/profile"
      />
      <Route
        component={require('../NotFound/').default}
        path="*"
      />
      {/* eslint-enable */}
    </Switch>
  );
}
