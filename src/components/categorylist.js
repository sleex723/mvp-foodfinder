import React from 'react';
import Restaurantlist from './restaurantlist.js';

const Categorylist = (props) => {
  console.log('Foodlist', props);
  // const listOfRestaurants = props.getCategoryFromList('mexican', (info) => {
  //   console.log('!LISTOFRESTAURANTS', info);
  //   return (<ul>'hello'</ul>)
  // });

  const listOfCategories = props.searchList.map((category) => {
    return(
      <div>
        <h2>{category}</h2>
        <ul>{<Restaurantlist restaurant={category} convertObj={props.getCategoryFromList}/>}</ul>
      </div>
      )
  });
  // return null
  return (<div>{listOfCategories}</div>);
}

export default Categorylist;