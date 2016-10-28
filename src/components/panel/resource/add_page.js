import React, { Component } from 'react';
import ResourceAdd from './add_resource'
import { connect } from 'react-redux'
import  { resourceAdd } from '../../../actions'

class AddResourcePage extends Component {
  render() {
    return (
    <div className='o_add'>
      <div className='o_container'>
        <div className='o_resource'>
          <h1>Добавить ресурс</h1>
          <ResourceAdd data={this.props.login} add={this.props.resourceAdd}/>
        </div>
      </div>
    </div>
    );
  }
};


function mapStateToProps(state) {
  return {
    resourceAdd,
    login: state.login
  }
}


export default connect(mapStateToProps, {resourceAdd})(AddResourcePage)