import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import SprintBoard from './components/SprintBoard';
import Notifications from './components/Notifications';
import Tasks from './components/Tasks';
import Subscribers from './components/Subscribers';


const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={SprintBoard} />
        <Route path='/notifications' component={Notifications} />
        <Route path='/subscribers' component={Subscribers} />
        <Route path='/tasks' component={Tasks} />
      </Route>
    </Router>
  );
};

export default Routes;
