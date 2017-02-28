import {
  CREATE_BOARD,
  ADD_LIST,
  ADD_CARD
} from '../actions/types';

const listReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return state;
    default:
      return state;
  }
}

export default (state = [{ name: 'Welcome', lists: [] }], action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return state.concat(action.board);
    case ADD_LIST:
      return state;
    case ADD_CARD:
      return state;
    default:
      return state;
  }
}
