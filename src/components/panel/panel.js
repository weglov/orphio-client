import React, { Component } from 'react';
import { load } from '../../action/Api';

class Panel extends Component {
  static onEnter(nextState, replace) {
    const token = window.localStorage.getItem('o__token');
    if (token) {
      load('users', token)
        .then((m) => {
            if (m.status === false) {
              return Promise.reject();
            }
            return m
      })
      .catch((m) => {
        window.localStorage.clear();  
        return replace('/login');
      })
    } else {
      replace('/login');
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