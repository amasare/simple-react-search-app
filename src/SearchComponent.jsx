let React = require('react');

class SearchComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      fruits: ['orange', 'apple', 'apricot', 'watermelon']
    };
  }

  render() {
    return (
      <div className='search-bar'>
        <input type='text' placeholder='Search'/>
        <p className='results'>this.state.fruits</p>
        {/*Question: why does this print this.state.fruits right to my screen?*/}
      </div>);
  }
}

export default SearchComponent;