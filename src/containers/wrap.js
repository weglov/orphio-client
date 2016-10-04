import React, { Component } from 'react'


class Wrap extends Component {
  render() {
    return (
      <div className="o_app">
        {this.props.data}
      </div>
    );
  }
}



export default Wrap
