import debounce from 'debounce-promise';
import { getProducts } from '../../api/product';
import {
  SUCCESS_FETCHING_PRODUCT,
  START_FETCHING_PRODUCT,
  ERROR_FETCHING_PRODUCT,
  SET_PAGE,
  SET_KEYWORD,
  SET_CATEGORY,
  SET_TAGS,
  TOGGLE_TAG,
  PREV_PAGE,
  NEXT_PAGE
} from './constants';

let debouncedFetchProducts = debounce(getProducts,1000)

export const startFetchingProducts = () => {
  return {
    type: START_FETCHING_PRODUCT
  }
}
export const errorFetchingProducts = () => {
  return {
    type: ERROR_FETCHING_PRODUCT
  }
}

export const successFetchingProducts = ({data, count}) => {
  return {
    type: SUCCESS_FETCHING_PRODUCT,
    data,
    count
} }

export const fetchProducts = () => {
  return async (dispatch, getState) => {

    dispatch(startFetchingProducts());
    try{
      let { data: {data, count} } = await debouncedFetchProducts({});
      dispatch(successFetchingProducts({data, count}));
    } catch(err) {
      dispatch(errorFetchingProducts());
    }
  }
}
