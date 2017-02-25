import { browserHistory } from 'react-router';
import { CHANGE_ROUTE } from './types';

export const changeRoute = route => dispatch => {
  dispatch({
    type: CHANGE_ROUTE,
    path: route.path,
    name: route.name
  });
  browserHistory.push(route.path);
};
