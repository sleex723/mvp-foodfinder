import React from 'react';

const Foodlist = (props) => {
  console.log('Foodlist', props);
  const listOfRestaurants = props.searchResults.map((item) => {
    return (
      <li>{item.name}</li>
    )
  })

  return (<div>{listOfRestaurants}</div>);
}
export default Foodlist;