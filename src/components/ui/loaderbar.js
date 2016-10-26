import React, { Component } from 'react'
import './loaderbar.css'
class LoaderBar extends Component {
  constructor() {
    super()
      this.state = {
         loader: ''
     }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.active) {
      this.setState({ loader: 'process' });
    } else {
      this.setState({ loader: 'active' });
      setTimeout(() => {
        this.setState({loader: 'to-first'})
      }, 500);
      setTimeout(() => {
        this.setState({loader: ''})
      }, 1000);
    }
  }
  render() {
      return (
        <div className="LoaderBar">
          <div className={"o_loaderBar " + this.state.loader}></div>
        </div>
      );
  }
};

export default LoaderBar;