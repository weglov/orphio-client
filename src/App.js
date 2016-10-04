import React, { Component } from 'react'
import Header from "./components/header/"
import Wrap from "./containers/wrap"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as orphioActions from './actions'
import './style/reset.css'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="o_app">
        <Header data={this.props.login} actions={this.props.actions}/>
        <Wrap data={this.props.children}/>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    login: state.login
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(orphioActions, dispatch)
  }
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(App)
