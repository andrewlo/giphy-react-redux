import { search, details, trending } from '../api/giphy/giphy';
import {
  GIPHY_SEARCH_PENDING,
  GIPHY_SEARCH_SUCCESS,
  GIPHY_SEARCH_ERROR,

  GIPHY_DETAILS_PENDING,
  GIPHY_DETAILS_SUCCESS,
  GIPHY_DETAILS_ERROR,

  GIPHY_TRENDING_PENDING,
  GIPHY_TRENDING_SUCCESS,
  GIPHY_TRENDING_ERROR,
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

export function giphyTrending(pageNum: number = 0) {
  return (dispatch, getState) => {

    return dispatch({
      types: [
        GIPHY_TRENDING_PENDING,
        GIPHY_TRENDING_SUCCESS,
        GIPHY_TRENDING_ERROR,
      ],
      payload: {
        promise: trending(pageNum),
        data: { pageNum }
      },
    });
  };
}
