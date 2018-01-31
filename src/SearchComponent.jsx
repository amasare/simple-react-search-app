let React = require('react');

class SearchComponent extends React.Component {
  render() {
    return (
      <div className='search-bar'>
        <input type='text' placeholder='Search'/>
        <p className='list-item'>orange</p>
        <p className='list-item'>apple</p>
      </div>);
  }
}

export default SearchComponent;