import React from 'react';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  addSearchTerm (terms) {
    this.props.onSearch(terms);
    this.setState({search: ''})
  }

  render() {
    return (<div>
      Enter your Zipcode: <br/><input type="text" onChange={(e) => this.props.onLocation(e.target.value)}/><br/>
      What are you craving? <br/><input type="text" value={this.state.search} onChange={(e) => this.setState({search: e.target.value})} />
      <button onClick={() => {this.addSearchTerm(this.state.search)}}>Add</button><br/>
    </div>)
  }
}
export default Search;