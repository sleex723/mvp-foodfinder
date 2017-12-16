import React from 'react';
import Restaurantentry from './restaurantEntry.js';

const Restaurantlist = (props) => {
  console.log('Restaurantlist', props);
  var list = [];
  const listOfRestaurants = props.convertObj(props.restaurant, (info) => {
    console.log('this is info', info)
    list = info;
  })

  return list.map((entry) => {
      console.log('THIS IS ENTRY',entry)
      return (
        <Restaurantentry restaurant={entry}/>
      )
    })
}

export default Restaurantlist;