
let update = require('immutability-helper');

function createPaginatedListReducer(listName: string) {
  const stateListName = `${listName}Results`;

  const INITIAL_STATE = {
    [stateListName]: [],
    hasError: false,
    isLoading: false,
    isLoadingMore: false,
    term: null,
    pageNum: 0,
    canLoadMore: false,
  };

  return (state = INITIAL_STATE, action = { type: '', payload: null }) => {

    const actionListName = listName.toUpperCase();

    switch (action.type) {
      case `App/GIPHY_${actionListName}_PENDING`:
        const loadingMore = action.payload.pageNum > 0;

        return update(state, { $merge: {
          [stateListName]: loadingMore ? state[stateListName] : [],
          hasError: false,
          isLoading: !loadingMore,
          isLoadingMore: loadingMore,
          term: action.payload.term,
          pageNum: action.payload.pageNum,
        }});

      case `App/GIPHY_${actionListName}_SUCCESS`:
        const { count, offset, total_count } = action.payload.pagination;

        return update(state, { $merge: {
          [stateListName]: [...(<any[]>state[stateListName]), ...action.payload.data],
          hasError: false,
          isLoading: false,
          isLoadingMore: false,
          canLoadMore: total_count ? count + offset < total_count : true

        }});

      case `App/GIPHY_${actionListName}_ERROR`:
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
  };
};

export default createPaginatedListReducer;
