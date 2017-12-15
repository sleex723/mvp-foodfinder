const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
const bodyParser = require('body-parser')
const compiler = webpack(webpackConfig);
const yelp = require('./helpers/yelpHelper.js');
const firebase = require('./database/app.js');

app.use(express.static(__dirname + '/www'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

//name, photoUrl, rating, address, link
app.post('/foodlist', function(req, res) {
  var searches = req.body['filters[]'];
  searches.forEach(function(term) {
    yelp.yelpHelper(term, req.body.location, function(data) {
      var info = data.businesses.map(function(el) {
        console.log(term);
        firebase.writeUserData(term, el.name, el.image_url, el.rating, el.location.address1, el.url)
      })
    })
  })
  res.end();
})

app.get('/foodlist', function(req, res) {
  // var dataArr = [];
  firebase.getUserData(function(data) {
    // var dataArr = [];
    // console.log(data);
    // for(var key in data) {
    //   // console.log(data[key]);
    //   dataArr.push(data);
    // }
    // console.log(dataArr);
    firebase.randomNum();
    // res.status(200).send(dataArr);
    res.status(200).send(data);
  })
  // res.status(200).send(dataArr);

  // res.end();
})

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});