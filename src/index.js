let React = require('react');
let ReactDOM = require('react-dom');

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

ReactDOM.render(<SearchComponent/>, document.getElementById('root'));