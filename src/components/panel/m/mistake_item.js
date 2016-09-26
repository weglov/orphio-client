import React, { Component } from 'react';
import {Link} from 'react-router';

class MistakeItem extends Component {
  render() {
    var data = this.props.data;
    return (
    <div className='o_mistake'>
      <div className={'o_mistake__check--' + data.timestamp + 'o_mistake__check'}><div className="checkmark"></div></div>
      <div className='o_mistake__header'>
        <div className='o_mistake__title'><Link to={data.url}>{data.id}</Link></div>
        <div className='o_mistake__time'>{data.timestamp}</div>
      </div>
        <div className='o_mistake__mis'>
          {data.left}<strong>{data.m}</strong>{data.right}
        </div>
    </div>
    );
  }
};

export default MistakeItem;