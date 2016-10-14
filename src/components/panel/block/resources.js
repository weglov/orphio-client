import React, { Component } from 'react'
import ResourceList from './resource_list'
import { connect } from 'react-redux'


class ResourcesBlock extends Component {
  render() {
    var data = this.props.data.map((elem, i) => 
      <ResourceList active={this.props.active === elem.id} set={this.props.action} className='o_item' key={i} data={elem} />
    )
    return (
    <div className='o_ResourcesBlock'>
      <ul className='o_ResourcesBlock_container'>
        {data}
      </ul>
    </div>
    );
  }
};

function mapStateToProps(state) {
  return { 
    active: state.resource.active
  }
}



export default connect(mapStateToProps)(ResourcesBlock)