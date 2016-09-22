import React, { Component } from 'react';
import { load } from '../../action/Api';

class Panel extends Component {
  static onEnter(nextState, replace) {
    const token = window.localStorage.getItem('o__token');
    load('users', token)
      .then((m) => {
          console.log(m);
      })
      .catch((m) => {
        console.log('ff' + m);
        replace('/')
      });
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