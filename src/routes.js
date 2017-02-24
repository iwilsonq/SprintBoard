import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import SprintBoard from './components/SprintBoard';
const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={SprintBoard} />
      </Route>
    </Router>
  );
};

export default Routes;
