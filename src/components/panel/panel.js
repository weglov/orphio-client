import React, { Component } from 'react';
import MistakePage from './m';
import { browserHistory } from 'react-router';
import { load } from '../../action/Api';
const token = window.localStorage.getItem('o__token');

class Panel extends Component {
  constructor(props) {
    super(props);
    this.token = window.localStorage.getItem('o__token');
  }
  static onEnter(nextState, replace) {
    console.log('Проверка');
  }
  Authorization() {
    if (token) {
      load('users', token)
        .then((m) => {
            if (m.status === false) {
              return Promise.reject();
            }
            return m;
      })
      .catch((m) => {
        return browserHistory.push('/login');
      })
    } else {
      browserHistory.push('/login');
    } 
  }
  componentWillMount() { 
    this.Authorization()
  }
  render() {
    return (
    <div className='o_panel'>
      <MistakePage token={token} />
    </div>
    );
  }
};

export default Panel;