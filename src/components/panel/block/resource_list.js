import React, { Component } from 'react'

class ResourceList extends Component {
   constructor(props, context){
    super(props);
    this.state = {
      active: '',
    };
  }
  handleClick = (e) => {
  	return this.props.set(e);
  }
  render() {
    return (
    <li className={'o_item ' + (this.props.active ? 'active' : '')} onClick={this.handleClick.bind(this, this.props.data.id)}>
      <img alt={this.props.data.name} src={"http://www.google.com/s2/favicons?domain=" + this.props.data.source} />
      <span>{this.props.data.name}</span>
      <div className='counter'>{this.props.data.size}</div>
    </li>
    );
  }
};

export default ResourceList;