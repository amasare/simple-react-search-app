import React from 'react';
import './searchComponent.scss';
import ListComponent from "../List/ListComponent.jsx";

const SearchComponent = ({query, filteredResults, saveQuery}) => {
  return (
    <div className='search'>
      <div className='search__bar'>
        <input type='text' placeholder='Search' onChange={event => saveQuery(event.target.value)}
               value={query}/>
      </div>
      <div className='search__results'><ListComponent list={filteredResults}/></div>
    </div>);
};

export default SearchComponent;