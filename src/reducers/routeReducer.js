import {
  CHANGE_ROUTE
} from '../actions/types';

const INITIAL_STATE = {
  path: '/',
  name: 'SprintBoard'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_ROUTE:
      return {
        path: action.path,
        name: action.name
      };
    default:
      return state;
  }
}
