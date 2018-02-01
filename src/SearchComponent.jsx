let React = require('react');

class SearchComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      fruits: ['orange', 'apple', 'apricot', 'watermelon']
      //Step 2
      ,filteredResults: ['orange', 'apple', 'apricot', 'watermelon']
    };
    this.printToScreen = this.printToScreen.bind(this);
  }

  printToScreen(event) {
    //Step 1
    const query = event.target.value;
    const filteredResults = this.state.fruits.filter(function (fruit) {
      return new RegExp('.*' + query + '.*').test(fruit);
    });
    console.log(filteredResults);

    //Step 2
    this.setState({filteredResults})
  }

  render() {
    return (
      <div className='search-bar'>
        <input type='text' placeholder='Search' onChange={this.printToScreen}/>
        <p className='results'>{this.state.fruits}</p>
        {/*Step 2*/}
        <p className='results'>{this.state.filteredResults}</p>
      </div>);
  }
}

export default SearchComponent;