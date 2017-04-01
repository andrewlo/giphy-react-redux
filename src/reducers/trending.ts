let update = require('immutability-helper');

import {
  GIPHY_TRENDING_PENDING,
  GIPHY_TRENDING_SUCCESS,
  GIPHY_TRENDING_ERROR,
} from '../constants';

const INITIAL_STATE = {
  trendingResults: [],
  hasError: false,
  isLoading: false,
};

function trendingReducer(state = INITIAL_STATE,
                         action = { type: '', payload: null }) {
  switch (action.type) {

  case GIPHY_TRENDING_PENDING:
    return update(state, { $merge: {
      hasError: false,
      isLoading: true,
    }});

  case GIPHY_TRENDING_SUCCESS:
    return update(state, { $merge: {
      trendingResults: action.payload.data,
      hasError: false,
      isLoading: false,
    }});

  case GIPHY_TRENDING_ERROR:
    return update(state, { $merge: {
      hasError: true,
      isLoading: false,
    }});

  default:
    return state;
  }
}

export default trendingReducer;
