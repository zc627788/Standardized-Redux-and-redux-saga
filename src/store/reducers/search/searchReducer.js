import * as searchType from '../../actions/search/searchActionType';

const INIT_STATE = {
  content: 'dispatch未触发',
};

const reducer = (state = INIT_STATE, action = {}) => {
  switch (action.type) {
    case searchType.SEARCH_CONTENT_REDUCER: {
      const { data } = action.payload;
      return {
        ...state,
        content: data || '',
      };
    }
    default:
      return state;
  }
};
export default reducer;
