import React, { Component } from 'react'
import ResourceAdd from './add_resource'
import { connect } from 'react-redux'
import  { resourceAll, deleteResource } from '../../../actions'
import ResourceItem from './resource_item'
import Loader from '../../ui/loader'


class Resource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.login.id || window.localStorage.getItem('o__id')
    }
  }
  componentDidMount() {
    this.props.resourceAll(this.state.id)
  }
  render() {
    var data = this.props.resources.map((elem, i) => 
      <ResourceItem 
        key={i} 
        token={this.props.login.token}
        item={i}  
        delete={this.props.deleteResource} 
        data={this.props.resources[i]} />
    )
    return (
      <div className="o_container">
        <div className="o_resource">
        <Loader active={true} />
        <header>
          <h1>Ресурсы</h1>
        </header>
        <div className="o_resources">
        {data}
        <ResourceAdd data={this.props.login}/>
        </div>
      </div>
    </div>
    );
  }
};


function mapStateToProps(state) {
  return {
    resources: state.resource.resources,
    resourceAll,
    login: state.login
  }
}



export default connect(mapStateToProps, {resourceAll, deleteResource})(Resource)