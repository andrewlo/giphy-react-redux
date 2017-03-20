let update = require('immutability-helper');

import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  LOGOUT_USER
} from '../constants';

const INITIAL_STATE = {
  count: 0,
};

function counterReducer(state = INITIAL_STATE, action = { type: '' }) {
  switch (action.type) {

  case INCREMENT_COUNTER:
    return update(state, { count: { $set: state.count + 1 } });

  case DECREMENT_COUNTER:
    return update(state, { count: { $set: state.count - 1 } });

  case LOGOUT_USER:
    return INITIAL_STATE;

  default:
    return state;
  }
}


export default counterReducer;
