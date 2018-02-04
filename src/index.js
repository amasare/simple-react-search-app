import React from 'react';
import ReactDOM from 'react-dom';
//Step 3
import {Provider} from 'react-redux'
//Step 1
import {createStore} from 'redux'

import SearchComponent from './SearchComponent.jsx';
import resultsReducer from './resultsReducer.js';

//Step 2. Create root reducer

let rootReducer = (state = {results: undefined}, action) => {
  //Step 5. Add results reducer
  return Object.assign({}, state, {results: resultsReducer(state.results, action)})
};

//Step 1. Create Store //Step 4. Add Dev tools
let store = createStore(rootReducer, undefined, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//Step 3. Add provider
ReactDOM.render(<Provider store={store}><SearchComponent/></Provider>, document.getElementById('root'));