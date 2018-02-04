//Step 1
import SearchComponent from './SearchComponent.jsx';
//Step 2
import {connect} from 'react-redux';

//Step 2
const mapStateToProps = (state) => {
  return {
    searchList: state.results
  }
};


//Step 1. Also in index js, replace SearchComponent with SearchContainer
export default connect(mapStateToProps)(SearchComponent);