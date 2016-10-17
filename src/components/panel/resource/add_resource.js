import React, { Component } from 'react'
const token = window.localStorage.getItem('o__id')

class ResourceAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      source: '',
      access: this.props.data.id ? [this.props.data.id] : [token],
      throbber: false
    }
  }
  onInputChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      });
  }
  handleSubmit = (e) => {
     e.preventDefault();
     this.setState({throbber: true});
     console.log(this.state);
     this.props.add(this.state, this.props.data.token)
  }
  render() {
     return (
      <div className='o_resource__add' onSubmit={this.handleSubmit}>
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