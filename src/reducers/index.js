import { combineReducers } from 'redux';
import routeReducer from './routeReducer';

export default combineReducers({
  index: () => [],
  route: routeReducer
});
