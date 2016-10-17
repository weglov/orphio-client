import React, { Component } from 'react'
import './loader.css'
class Loader extends Component {
  render() {
    if (this.props.active) {
      return (
      <div className="o_loader">
        <div className="loader">Loading...</div>
      </div>
      );
    } else {
      return null
    }
    
  }
};

export default Loader;