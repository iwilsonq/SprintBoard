import { combineReducers } from 'redux';
import routeReducer from './routeReducer';
import taskReducer from './taskReducer';

export default combineReducers({
  index: () => [],
  route: routeReducer,
  task: taskReducer
});
