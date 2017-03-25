let update = require('immutability-helper');

import {
  GIPHY_SEARCH_PENDING,
  GIPHY_SEARCH_SUCCESS,
  GIPHY_SEARCH_ERROR,
} from '../constants';

const INITIAL_STATE = {
  searchResults: [],
  hasError: false,
  isLoading: false,
  isLoadingMore: false,
  term: null,
  pageNum: 0,
  canLoadMore: false,
};

function giphyReducer(state = INITIAL_STATE,
                        action = { type: '', payload: null }) {
  switch (action.type) {

  case GIPHY_SEARCH_PENDING:
    return update(state, { $merge: {
      searchResults: state.term === action.payload.term ? state.searchResults : [],
      hasError: false,
      isLoading: action.payload.pageNum === 0,
      isLoadingMore: action.payload.pageNum > 0,
      term: action.payload.term,
      pageNum: action.payload.pageNum,
    }});

  case GIPHY_SEARCH_SUCCESS:
    const { count, offset, total_count } = action.payload.pagination;

    return update(state, { $merge: {
      searchResults: state.searchResults.concat(action.payload.data),
      hasError: false,
      isLoading: false,
      isLoadingMore: false,
      canLoadMore: count + offset < total_count

    }});

  case GIPHY_SEARCH_ERROR:
    return update(state, { $merge: {
      hasError: true,
      isLoading: false,
      isLoadingMore: false,
      term: null,
      pageNum: 0,
      canLoadMore: false
    }});

  default:
    return state;
  }
}

export default giphyReducer;
