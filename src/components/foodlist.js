import React from 'react';

class FoodList extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  render() {
    return (
      <button
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
      >
        Count: {this.state.count}
      </button>
    );
  }
}
export default FoodList;