import {connect} from 'react-redux';
import SearchComponent from './SearchComponent.jsx';

//Step 2..lets make an action we will save in here
import {saveQuery} from './actions.js'

const mapStateToProps = (state) => {
  return {
    searchList: state.results,
    //Exercise
    //Extra. step 5
    query: state.query
  };
};

//Step 2
const mapDispatchToProps = (dispatch) => {
  return {
    saveQuery: query => {
      dispatch(saveQuery(query));
    }
  };
};


//Step 3 Connect the dispatch action to the Component
export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);