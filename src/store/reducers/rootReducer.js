import { combineReducers } from 'redux';
import searchReducer from './search/searchReducer';

const rootReducer = combineReducers({
  config: (state = {}) => state,
  searchReducer: searchReducer,
});

export default rootReducer;
