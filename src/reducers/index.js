import {combineReducers} from 'redux'

import resultsReducer from './resultsReducer.js';
import queryReducer from "./queryReducer";

const rootReducer = combineReducers({
  results: resultsReducer,
  query: queryReducer
});

export default rootReducer