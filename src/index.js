let React = require('react');
let ReactDOM = require('react-dom');

ReactDOM.render(React.createElement(
  'div', {'className': 'search-bar'},
  React.createElement('input', {'type': 'text', 'placeholder': 'Search'}, null)),
  document.getElementById('root'));