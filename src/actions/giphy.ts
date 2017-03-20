import { search } from '../api/giphy/giphy';
import {
  GIPHY_SEARCH_PENDING,
  GIPHY_SEARCH_SUCCESS,
  GIPHY_SEARCH_ERROR,
} from '../constants';

export function giphySearch(term: string) {
  return (dispatch, getState) => {

    return dispatch({
      types: [
        GIPHY_SEARCH_PENDING,
        GIPHY_SEARCH_SUCCESS,
        GIPHY_SEARCH_ERROR,
      ],
      payload: {
        promise: search(term),
      },
    });
  };
}