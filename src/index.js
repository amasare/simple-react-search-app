import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import SearchContainer from './SearchContainer.js';
import resultsReducer from './resultsReducer.js';
import queryReducer from "./queryReducer";

let rootReducer = (state = {results: undefined, query: undefined}, action) => {
  return Object.assign({}, state, {
    results: resultsReducer(state.results, action),
    query: queryReducer(state.query, action)
  });
};

let store = createStore(rootReducer, undefined, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><SearchContainer/></Provider>, document.getElementById('root'));