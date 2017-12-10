import React from 'react';
import Button from 'react-bootstrap/lib/Button';

const Filters = (props) => {
  console.log(props);
  const filteredItems = props.searchList.map((item) => {
    return (
      <button id="something-btn" type="button" class="btn btn-primary btn-sm" key={item}>{item}</button>
    )
  })

  return (<div>{filteredItems}</div>);
}
export default Filters;