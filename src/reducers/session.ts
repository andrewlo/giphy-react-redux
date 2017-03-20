let update = require('immutability-helper');

import {
  LOGIN_USER_PENDING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
} from '../constants';

const INITIAL_STATE = {
  token: null,
  user: {},
  hasError: false,
  isLoading: false,
};

function sessionReducer(state = INITIAL_STATE,
                        action = { type: '', payload: null }) {
  switch (action.type) {

  case LOGIN_USER_PENDING:
    return update(state, { $merge: {
      token: null,
      user: {},
      hasError: false,
      isLoading: true,
    }});

  case LOGIN_USER_SUCCESS:
    return update(state, { $merge: {
      token: action.payload.token,
      user: action.payload.profile,
      hasError: false,
      isLoading: false,
    }});

  case LOGIN_USER_ERROR:
    return update(state, { $merge: {
      hasError: true,
      isLoading: false,
    }});

  case LOGOUT_USER:
    return INITIAL_STATE;

  default:
    return state;
  }
}

export default sessionReducer;
