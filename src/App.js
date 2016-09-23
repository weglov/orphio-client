import React, { Component } from 'react';
import Header from "./components/header/";
import './style/reset.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="o_app">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
