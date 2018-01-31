let React = require('react');

class SearchComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      fruits: ['orange', 'apple', 'apricot', 'watermelon']
    };
    //Step 2 (Refactor): this.printToScreen = this.printToScreen.bind(this);
  }

  // printToScreen(event) {
    //Step 2 (Refactor): console.log(event.target.value);
  // }

  render() {
    return (
      <div className='search-bar'>
         <input type='text' placeholder='Search' onChange={function(event) {console.log(event.target.value)}}/>
        {/*Step 2(Refactor) <input type='text' placeholder='Search' onChange={this.printToScreen}/>*/}
        <p className='results'>{this.state.fruits}</p>
      </div>);
  }
}

export default SearchComponent;