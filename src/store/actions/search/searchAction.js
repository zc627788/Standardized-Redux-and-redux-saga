import * as searchType from './searchActionType';

//sagas
export const search = ({ payload }) => {
  return {
    type: searchType.SEARCH_CONTENT,
    payload,
  };
};

//reducer
export const searchNotReducer = ({ payload }) => {
  return {
    type: searchType.SEARCH_CONTENT_REDUCER,
    payload,
  };
};
