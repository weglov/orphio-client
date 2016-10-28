import React, { Component } from 'react'
import { browserHistory } from 'react-router';
const token = window.localStorage.getItem('o__id')

class ResourceAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      source: '',
      valid_name: true,
      valid_source: true,
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
     if (!this.state.name.length || !this.state.source.length) {
      this.setState({
        valid_name: this.state.name.length ? true : false,
        valid_source: this.state.source.length ? true : false,
      });
     } else {
      this.props.add(this.state, this.props.data.token).then((json) => {
        if(json.state) {
          browserHistory.push('/panel')
        } else {
          alert('Произошла ошибка')
        } 
      })
     }
     
  }
  render() {
     return (
      <div className='o_resource__add' onSubmit={this.handleSubmit}>
        <form className='o_form'>
          <div className={'o_form__group ' + this.state.valid_name}>
            <label>Назавание ресурса</label>
            <input type="text" onChange={this.onInputChange} name="name" value={this.state.name} placeholder="Имя" />
          </div>
          <div className={'o_form__group ' + this.state.valid_source}>
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