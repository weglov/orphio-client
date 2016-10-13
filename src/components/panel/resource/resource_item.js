import React, { Component } from 'react'

class ResourceItem extends Component {
  render() {
    const data = this.props.data
    return (
    <div className='o_item'>
        <div className="o_item__header">
          <div className="o_item__active">Код установлен</div>
        </div>
        <div className="o_item__content">
          <div className="o_item__title">{data.name}</div>
          <div className="o_item__url">{data.source}</div>
        </div>
        <div className="o_item__footer">
          <div className="o_item__fav">
            <img alt="favicon" src={"http://www.google.com/s2/favicons?domain=" + data.source}/>
          </div>
        </div>
    </div>
    );
  }
};

export default ResourceItem;