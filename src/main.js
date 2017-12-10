import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search.js';
import FoodList from './components/foodlist.js';
import Filters from './components/filters.js';
import $ from "jquery";
import Location from './components/geolocation.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '91765',
      searchList: [],
      searchResults: []
    }
    console.log(this);
    console.log(props);
  }

  onAdd (terms) {
    var newStateArr = this.state.searchList.slice();
    newStateArr.push(terms);
    this.setState({searchList: newStateArr});
  }

  onLocation (location) {
    this.setState({location: location});
  }

  postData () {
    var app = this;
    $.ajax({
      url: 'http://localhost:3000/foodlist',
      type: 'POST',
      dataType: 'text',
      data: {
        filters: app.state.searchList,
        location: app.state.location
      },
      success: function(data) {
        console.log('successfully got data')
      },
      error: function(err) {
        console.error(err);
      }
    });
  }

  fetchList () {

    var app = this;

    $.ajax({
      url: 'http://localhost:3000/foodlist',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        console.log('successfully got data', data);
        app.setState({searchResults: data});
      },
      error: function(err) {
        console.error('hello', err);
      }
    })

  }

  render () {
    return (<div>
      <h1>Food Picker</h1>
      <Search onSearch={this.onAdd.bind(this)} onLocation={this.onLocation.bind(this)}/>
      <Filters {...this.state}/>
      <button onClick={() => {this.postData()}}>Submit</button>
      <Location />
    </div>)
  }
}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<App />, document.getElementById('app'));
});


