import {connect} from 'react-redux';
import SearchComponent from './SearchComponent.jsx';
import {saveQuery} from './actions.js'


const filterResults = (query, searchList) => {
  return searchList.filter((listItem) => new RegExp(`.*${query}.*`).test(listItem));
};


const mapStateToProps = (state) => {
  return {
    searchList: state.results,
    query: state.query,
    filteredResults: filterResults(state.query, state.results)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveQuery: query => {
      dispatch(saveQuery(query));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);