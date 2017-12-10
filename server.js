const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
const bodyParser = require('body-parser')
const compiler = webpack(webpackConfig);
const yelp = require('./helpers/yelpHelper.js');

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

app.post('/foodlist', function(req, res) {
  yelp.yelp.search({term: 'food', location: '90210', price: '1,2,3', limit: 10})
  .then(function (data) {
      console.log(data);
      console.log('good');
  })
  .catch(function (err) {
      console.error(err);
      console.log('fail');
  });
  res.end();
})

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});