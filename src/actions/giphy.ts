import { search, details } from '../api/giphy/giphy';
import {
  GIPHY_SEARCH_PENDING,
  GIPHY_SEARCH_SUCCESS,
  GIPHY_SEARCH_ERROR,
  SELECT_GIF,
  GIPHY_DETAILS_PENDING,
  GIPHY_DETAILS_SUCCESS,
  GIPHY_DETAILS_ERROR,
} from '../constants';

export function giphySearch(term: string, pageNum: number = 0) {
  return (dispatch, getState) => {

    return dispatch({
      types: [
        GIPHY_SEARCH_PENDING,
        GIPHY_SEARCH_SUCCESS,
        GIPHY_SEARCH_ERROR,
      ],
      payload: {
        promise: search(term, pageNum),
        data: { term, pageNum },
      },
    });
  };
}

export function selectGif(id: string) {
  return {
    type: SELECT_GIF,
    payload: id,
  };
}

export function giphyDetails(id: string) {
  return (dispatch, getState) => {

    return dispatch({
      types: [
        GIPHY_DETAILS_PENDING,
        GIPHY_DETAILS_SUCCESS,
        GIPHY_DETAILS_ERROR,
      ],
      payload: {
        promise: details(id),
      },
    });
  };
}
