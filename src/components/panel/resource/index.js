import React, { Component } from 'react'
import ResourceAdd from './add_resource'
import { connect } from 'react-redux'
import  { resourceAdd } from '../../../actions'

class Resource extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {

  }
  render() {
    return (
    <div className='o_resource'>
      <div className='o_container'>
        <header>
          <h1>Ресурсы</h1>
        </header>
        <ResourceAdd action={this.props.resourceAdd} data={this.props.data}/>
      </div>
    </div>
    );
  }
};


function mapStateToProps(state) {
  return { 
    resourceAdd,
    data: state.login
  }
}



export default connect(mapStateToProps)(Resource)