import React, { Component } from 'react';

class Panel extends Component {
  static onEnter(nextState, replace) {
    const token = window.localStorage.getItem('o__token')
    if (!token) {
      replace('/')
    }
  }
  render() {
    return (
    <div className='o_login'>
      Отлично
    </div>
    );
  }
};

export default Panel;