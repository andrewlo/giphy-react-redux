let update = require('immutability-helper');

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
} from '../constants';

const INITIAL_STATE = {
  sidebarOpen: false,
};

function uiReducer(state = INITIAL_STATE,
                       action = { type: '', payload: null }) {
  switch (action.type) {

  case SIDEBAR_OPEN:
    return update(state, { $merge: {
      sidebarOpen: true,
    }});

  case SIDEBAR_CLOSE:
    return update(state, { $merge: {
      sidebarOpen: false,
    }});

  default:
    return state;
  }
}

export default uiReducer;
