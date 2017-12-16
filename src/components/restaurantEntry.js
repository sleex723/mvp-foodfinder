import React from 'react';

const Restaurantentry = ({restaurant}) => {

  console.log('Restaurantrestaurant', {restaurant});
  return (
    <li>
      <img src={restaurant.photoUrl} height="75" width="75"/>
      <a href={restaurant.url}>{restaurant.name}</a>
      <div>{restaurant.address}</div>
      <div>Rating: {restaurant.rating}</div>
  </li>)
}

export default Restaurantentry;