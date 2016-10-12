import React, { Component } from 'react';

class ResourceAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      source: '',
      access: []
    }
  }
  onInputChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      });
  }
  componentWillReceiveProps(next) {
    this.setState({
       access: [...this.state.access, next.data.id]  
     });
  }
  onSubmit = (e) => {
     e.preventDefault();
     this.props.action(this.state, this.props.data.token) 
  }
  render() {
    return (
    <div className='o_resource__add' onSubmit={this.onSubmit}>
      <h2>Добавить ресурс</h2>
      <form className='o_form'>
        <div className='o_form__group'>
          <label>Назавание ресурса</label>
          <input type="text" onChange={this.onInputChange} name="name" value={this.state.name} placeholder="Имя" />
        </div>
        <div className='o_form__group'>
          <label>URL ресурса</label>
          <input type="text" onChange={this.onInputChange} name="source" value={this.state.source} placeholder="http://" />
        </div>
        <input type="submit" value="Добавить" />
      </form>
    </div>
    );
  }
};

export default ResourceAdd;