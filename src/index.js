import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import SearchContainer from './SearchContainer.js';
import rootReducer from './reducers/index.js';

let store = createStore(rootReducer, undefined, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><SearchContainer/></Provider>, document.getElementById('root'));