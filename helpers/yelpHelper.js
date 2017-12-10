const Yelp = require('yelp-api-v3');
const config = require('../config/yelp.js');

var yelp = new Yelp({
  app_id: config.YELP_APP_ID,
  app_secret: config.YELP_API_KEY
});



module.exports.yelp = yelp;