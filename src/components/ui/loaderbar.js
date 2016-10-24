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
    console.info(nextProps.active)
    if (nextProps.active) {
      this.setState({ loader: 'process' });
    } else {
      this.setState({ loader: 'active' });
      setTimeout(() => {
        this.setState({loader: 'to-first'})
      }, 1000);
      setTimeout(() => {
        this.setState({loader: ''})
      }, 2000);
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