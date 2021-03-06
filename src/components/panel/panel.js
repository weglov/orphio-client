import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { load } from '../../actions/Api';
import { connect } from 'react-redux'
import  { authorization, resourceAll } from '../../actions'

class Panel extends Component {
  constructor() {
  super()
    this.state = {
       id: window.localStorage.getItem('o__id'),
       token: window.localStorage.getItem('o__token')
   }
  }
  static onEnter(nextState, replace) {
    console.log(nextState);
    var token = window.localStorage.getItem('o__token');
    if (!token) {
      replace('/login')
    } 
  }
  componentDidMount() {
    this.props.resourceAll(window.localStorage.getItem('o__id')).then((e) => {
      if(!this.props.resource.resources.length) {
        browserHistory.push('/panel/resource/add');
      }
    })
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
        {this.props.children}
    </div>
    );
  }
};

function mapStateToProps(state) {
  return { 
    resource: state.resource,
    authorization,
    resourceAll
  }
}



export default connect(mapStateToProps, {authorization, resourceAll})(Panel)