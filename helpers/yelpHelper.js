
const request = require('request');
const config = require('../config/yelp.js');

let yelpHelper = (data, location, cb) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL

   // In this function, you'll use the npm request module to fetch a user's Github repositories from the Github API.
   console.log('Trying to get information from yelpHelper', data);

  var options = { method: 'GET',
    url: 'https://api.yelp.com/v3/businesses/search',
    qs:
     { term: `${JSON.stringify(data)}`,
       limit: 1,
       location: `${location}`,
       radius: 10000,
       categories: `restaurants`,
       sort_by: 'review_count' },
    headers:
     { 'cache-control': 'no-cache',
       authorization: `Bearer ${config.YELP_API_KEY}` } };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var info = JSON.parse(body);
    cb(info)
    // console.log(body);
  });



}

module.exports.yelpHelper = yelpHelper;