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

function searchReducer(state = INITIAL_STATE,
                       action = { type: '', payload: null }) {
  switch (action.type) {

  case GIPHY_SEARCH_PENDING:
    const loadingMore = action.payload.pageNum > 0;

    return update(state, { $merge: {
      searchResults: loadingMore ? state.searchResults : [],
      hasError: false,
      isLoading: !loadingMore,
      isLoadingMore: loadingMore,
      term: action.payload.term,
      pageNum: action.payload.pageNum,
    }});

  case GIPHY_SEARCH_SUCCESS:
    const { count, offset, total_count } = action.payload.pagination;

    return update(state, { $merge: {
      searchResults: [...state.searchResults, ...action.payload.data],
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

export default searchReducer;
