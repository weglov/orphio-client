import React, { Component } from 'react'

class ResourceItem extends Component {
  resourceDelete = (e, id) => {
    var token = this.props.token;
    console.log(token);
    this.props.delete(e, id, token)
  }
  constructor(props) {
    super(props);
    this.state = {
      access: ''
    }
  }
  onInputChange = (e) => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  addAccess = (e) => { 
    e.preventDefault();
    var access = this.props.data.access;
    access.push(this.state.access);
    this.props.add(this.props.data.id, {'access': access})
   
  }
  render() {
    const data = this.props.data
    var access = data.access.map((e, i) => {
      return (<span key={e}>{e}</span>)
    })
    return (
    <div className='o_item'>
        <div className="o_item__header">
          {data.id}
          <div className="o_item__active">Код установлен</div>
          <div className="o_item__delete" data={data.id} onClick={this.resourceDelete.bind(null, this.props.item, data.id)}>Удалить</div>
        </div>
        <div className="o_item__content">
          <div className="o_item__title">{data.name}</div>
          <div className="o_item__url">{data.source}</div>
            <div className="o_item__access">
            <h3>Доступ</h3>
              {access}
              <div className="o_item__access--add">
                <input onChange={this.onInputChange} placeholder='email' value={this.state.access} name='access'></input>
                <button onClick={this.addAccess}>OK</button>
              </div>
            </div>
          <textarea type="text" rows="2" cols="55" defaultValue={'<script src="http://78.155.218.217:888/v1/code/' + data.id + '.js"></script>'} />
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