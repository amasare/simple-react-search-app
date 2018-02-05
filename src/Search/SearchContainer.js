import Reflux from 'reflux';
import React from 'react';
import SearchComponent from './SearchComponent.jsx';

import QueryStore from '../QueryStore'
import QueryActions from '../QueryStore'
import ResultsStore from '../ResultsStore'

const filterResults = (query, searchList) => {
  return searchList.filter((listItem) => new RegExp(`.*${query}.*`).test(listItem));
};

class SearchContainer extends Reflux.Component {
  constructor(props){
    super(props);
    this.stores = [QueryStore, ResultsStore];
  }

  render() {
    return (<SearchComponent query={this.state.query} filteredResults={['implement your results store and use filter method above']} saveQuery={QueryActions.save}/>)
  }
}

export default SearchContainer;