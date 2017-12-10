
const request = require('request');
const config = require('../config/yelp.js');

let yelpHelper = (data, cb) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL

   // In this function, you'll use the npm request module to fetch a user's Github repositories from the Github API.
   console.log('Trying to get information from yelpHelper', data);
   console.log(config.YELP_API_KEY)

  var options = { method: 'GET',
    url: 'https://api.yelp.com/v3/businesses/search',
    qs:
     { term: 'delis indian mexican american',
       latitude: '37.786882',
       longitude: '-122.399972' },
    headers:
     { 'cache-control': 'no-cache',
       authorization: `Bearer ${config.YELP_API_KEY}` } };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });



}

module.exports.yelpHelper = yelpHelper;