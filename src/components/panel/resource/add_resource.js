import React, { Component } from 'react'
import { post } from '../../../actions/Api.js'
import Loader from '../../ui/loader'

class ResourceAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      source: '',
      access: [],
      throbber: false
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
  handleSubmit = (e) => {
     e.preventDefault();
     this.setState({throbber: true});
     post('resource/', this.state, this.props.data.token)
      .then(json => {
        this.setState({throbber: false});
      });
  }
  render() {
    if (!this.state.throbber) {
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
   } else {
    return (
     <Loader active={this.state.throbber} />
     )
   }
    
  }
};

export default ResourceAdd;