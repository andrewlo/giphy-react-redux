let update = require('immutability-helper');

import {
  GIPHY_SEARCH_PENDING,
  GIPHY_SEARCH_SUCCESS,
  GIPHY_SEARCH_ERROR,
} from '../constants';

const INITIAL_STATE = {
  searchResults: null,
  hasError: false,
  isLoading: false,
};

function giphyReducer(state = INITIAL_STATE,
                        action = { type: '', payload: null }) {
  switch (action.type) {

  case GIPHY_SEARCH_PENDING:
    return update(state, { $merge: {
      searchResults: null,
      hasError: false,
      isLoading: true,
    }});

  case GIPHY_SEARCH_SUCCESS:
    return update(state, { $merge: {
      searchResults: action.payload,
      hasError: false,
      isLoading: false,
    }});

  case GIPHY_SEARCH_ERROR:
    return update(state, { $merge: {
      hasError: true,
      isLoading: false,
    }});

  default:
    return state;
  }
}

export default giphyReducer;
