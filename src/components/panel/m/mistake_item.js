import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

class MistakeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: this.props.check
    }
  }
  onChange = (e) => {
    this.setState({
      check: true 
    });
  }
  render() {
    var data = this.props.data;
    let created = moment(data.timestamp).fromNow();
    return (
    <div className='o_mistake'>
      <div className={'o_mistake__check--' + data.check + ' o_mistake__check'}>
        <label className="control control--checkbox">
          <input type="checkbox" onChange={this.onChange} checked={this.state.check ? 'checked' : ''}/>
          <div className="control__indicator"></div>
        </label>
      </div>
      <div className='o_mistake__header'>
        <div className='o_mistake__title'><Link to={data.url} target="_blank">{data.title || data.id}</Link></div>
        
        <div className='o_mistake__mis'>
          {data.left}<strong>{data.m}</strong>{data.right}
        </div>
      </div>
      <div className='o_mistake__setting'> 
        <div className='o_mistake__time'>{created}</div>
      </div>
    </div>
    );
  }
};

export default MistakeItem;