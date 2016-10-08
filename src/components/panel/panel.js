import React, { Component } from 'react';
import MistakePage from './m';
import { browserHistory } from 'react-router';
import { load } from '../../actions/Api';
import { connect } from 'react-redux'
import  { login, logout } from '../../actions'
const token = window.localStorage.getItem('o__token');

class Panel extends Component {
  static onEnter(nextState, replace) {
    var token = window.localStorage.getItem('o__token');
    var id = window.localStorage.getItem('o__id');
    var user = {
      id:  window.localStorage.getItem('o__id'),
      token: window.localStorage.getItem('o__token'),
      email: window.localStorage.getItem('o__email')
    }
    this.props.login(user)
    if (token) {
      load('users/' + id, token)
        .then((m) => {
            if (m.status === false) {

              return Promise.reject();
            }
            return m;
      })
      .catch((m) => {
        window.localStorage.clear();
        return browserHistory.push('/login');
      })
    } else {
      window.localStorage.clear();
      replace('/login');
    } 
  }
  componentWillMount() { 
    // this.Authorization()
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
  return { index: state.login }
}



export default connect(mapStateToProps, {login, logout})(Panel)