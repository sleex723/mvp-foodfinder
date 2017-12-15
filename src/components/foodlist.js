import React from 'react';

const Foodlist = (props) => {
  console.log('Foodlist', props);
  // const listOfRestaurants = props.searchResults.map((resName) => {
  //           return(
  //             <ul>'hello'</ul>)
  //         });

  const listOfCategories = props.searchList.map((category) => {
    return(
      <div>
        <h2>{category}</h2>
      </div>
      )
  });
  // return null
  return (<div>{listOfCategories}</div>);
}
export default Foodlist;