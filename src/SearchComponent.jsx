import React from 'react';
import './searchComponent.scss';

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    const searchList = props.searchList;
    this.state = {
      fruits: searchList,
      filteredResults: searchList
    };
    this.filterResults = this.filterResults.bind(this);
  }

  filterResults(event) {
    const query = event.target.value;
    //Step 1
    this.props.saveQuery(query);
    const filteredResults = this.state.fruits.filter((fruit) => new RegExp(`.*${query}.*`).test(fruit));

    this.setState({filteredResults})
  }

  renderResults(results) {
    const resultRows = results.map((result) => (<div className='list-item' key={result}>{result}</div>));
    return (<div>{resultRows}</div>);
  }

  render() {
    return (
      <div className='search'>
        <div className='search__bar'>
          {/*Extra, exercise, step5*/}
          <input type='text' placeholder='Search' onChange={this.filterResults} value={this.props.query}/>
        </div>
        <div className='search__results'>{this.renderResults(this.state.filteredResults)}</div>
      </div>);
  }
}

export default SearchComponent;