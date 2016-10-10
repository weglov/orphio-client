import React, { Component } from 'react';
import MistakePage from './m';
import { browserHistory } from 'react-router';
import { load } from '../../actions/Api';
import { connect } from 'react-redux'
import  { authorization } from '../../actions'
const token = window.localStorage.getItem('o__token');

class Panel extends Component {
  constructor() {
  super()
    this.state = {
       id: window.localStorage.getItem('o__id'),
       token: window.localStorage.getItem('o__token')
   }
  }
  static onEnter(nextState, replace) {
    var token = window.localStorage.getItem('o__token');
    if (!token) {
      replace('/login')
    }
  }
  componentWillMount() {
    load('users/' + this.state.id, this.state.token)
      .then(function(user) {
          if (user.status === false) {
              return Promise.reject();
          }
          return user;
      })
      .catch((user) => {
          window.localStorage.clear();
           return browserHistory.push('/login');
      });
    var user = {
          id:  window.localStorage.getItem('o__id'),
          token: window.localStorage.getItem('o__token'),
          email: window.localStorage.getItem('o__email')
    }
    this.props.authorization(user);
  }
  render() {
    return (
    <div className='o_panel'>
      <MistakePage token={token} />
    </div>
    );
  }
};

function mapStateToProps(state) {
  return { index: state.authorization }
}



export default connect(mapStateToProps, {authorization})(Panel)