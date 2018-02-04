import React from 'react';

const ListComponent = (props) => {
  const resultRows = props.list.map((item) => (<div className='list-item' key={item}>{item}</div>));
  return (<div>{resultRows}</div>);
};

export default ListComponent;