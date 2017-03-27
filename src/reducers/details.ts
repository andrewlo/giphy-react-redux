let update = require('immutability-helper');

import {
  SELECT_GIF,
  GIPHY_DETAILS_PENDING,
  GIPHY_DETAILS_SUCCESS,
  GIPHY_DETAILS_ERROR,
} from '../constants';

const INITIAL_STATE = {
  selectedId: null,
  hasError: false,
  isLoading: false,
  gif: null,
};

function detailsReducer(state = INITIAL_STATE,
                       action = { type: '', payload: null }) {
  switch (action.type) {

  case SELECT_GIF:
    return update(state, { $merge: {
      selectedId: action.payload,
    }});

  case GIPHY_DETAILS_PENDING:
    return update(state, { $merge: {
      hasError: false,
      isLoading: true,
    }});

  case GIPHY_DETAILS_SUCCESS:
    return update(state, { $merge: {
      gif: action.payload.data,
      hasError: false,
      isLoading: false,
    }});

  case GIPHY_DETAILS_ERROR:
    return update(state, { $merge: {
      hasError: true,
      isLoading: false,
    }});
  default:
    return state;
  }
}

export default detailsReducer;
