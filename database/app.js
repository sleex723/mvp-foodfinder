const firebase = require('firebase');
const api = require('../config/yelp.js')
var config = {
  apiKey: api.FIREBASE_API,
  authDomain: "hrmvp-75480.firebaseapp.com",
  databaseURL: "https://hrmvp-75480.firebaseio.com",
  projectId: "hrmvp-75480",
  storageBucket: "hrmvp-75480.appspot.com",
  messagingSenderId: "788669308825"
};
firebase.initializeApp(config);

var database = firebase.database();

var writeUserData = function(name, photoUrl, rating, address, link) {
  database.ref('foodlist/').push({
    name: name,
    photoUrl: photoUrl,
    rating: rating,
    address: address,
    link: link
  })

  console.log(database)
}

module.exports.writeUserData = writeUserData;