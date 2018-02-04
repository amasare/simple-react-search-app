import React from 'react';
import './searchComponent.scss';

//Step3 renderResults not really needed in this component
const renderResults = (results) => {
  const resultRows = results.map((result) => (<div className='list-item' key={result}>{result}</div>));
  return (<div>{resultRows}</div>);
};

//Step 2...delete unused methods and instances of state, deleting constructor eventually
class SearchComponent extends React.Component {
  render() {
    return (
      <div className='search'>
        <div className='search__bar'>
          <input type='text' placeholder='Search' onChange={event => this.props.saveQuery(event.target.value)}
                 value={this.props.query}/>
        </div>
        <div className='search__results'>{renderResults(this.props.filteredResults)}</div>
      </div>);
  }
}

export default SearchComponent;