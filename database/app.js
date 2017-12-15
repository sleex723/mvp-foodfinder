const firebase = require('firebase');
const api = require('../config/yelp.js');


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
var count = Math.floor(Math.random() * 99999999);
var randomNum = function() {
  count = Math.floor(Math.random() * 99999999);
}

var writeUserData = function(category, name, photoUrl, rating, address, link) {
  database.ref(`foodlist/${count}/${category}`).push({
    name: name,
    photoUrl: photoUrl,
    rating: rating,
    address: address,
    link: link
  })
}

var leadsRef = firebase.database().ref('foodlist');
var getUserData = function(cb) {
  console.log(count);
  var userData = [];
  leadsRef.child(`${count}`).on('value', function(snap) {
    cb(snap.val());
    // console.log(snap.val());
    // var categories = Object.keys(snap.val());
    // var searchRes = snap.val();
    // console.log(categories);
    // categories.forEach(function(restaurantKey) {
    //   console.log(searchRes[restaurantKey])
    // })
  })
}

module.exports.randomNum = randomNum;
module.exports.writeUserData = writeUserData;
module.exports.getUserData = getUserData;