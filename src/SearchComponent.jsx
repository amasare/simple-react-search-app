import React from 'react';
import './searchComponent.scss';
import ListComponent from "./ListComponent.jsx";

//Step 2, move to another Component
const renderResults = (results) => {
  const resultRows = results.map((result) => (<div className='list-item' key={result}>{result}</div>));
  return (<div>{resultRows}</div>);
};

//Step 1, use a function instead of extending React Component
//alternatively, use ({query, filteredResults, saveQuery}) instead of (props), removing props in return method
const SearchComponent = (props) => {
  return (
    <div className='search'>
      <div className='search__bar'>
        <input type='text' placeholder='Search' onChange={event => props.saveQuery(event.target.value)}
               value={props.query}/>
      </div>
      {/*//Step 2*/}
      <div className='search__results'><ListComponent list={props.filteredResults}/></div>
      {/*Step 3 - demonstrate reuse*/}
      <div className='search__results'><ListComponent list={['wow', 'sale']}/></div>
    </div>);
};

export default SearchComponent;