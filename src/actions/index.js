import { browserHistory } from 'react-router';
import {
  CHANGE_ROUTE,
  CREATE_BOARD
} from './types';

export const changeRoute = route => dispatch => {
  dispatch({
    type: CHANGE_ROUTE,
    path: route.path,
    name: route.name
  });
  browserHistory.push(route.path);
};

export const createBoard = name => dispatch => {
  dispatch({
    type: CREATE_BOARD,
    board: { name, lists: [] }
  });
};
