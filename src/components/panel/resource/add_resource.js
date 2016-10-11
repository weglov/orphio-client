import React, { Component } from 'react';

class ResourceAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    this.props.action({name: 1, source: 2}, 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ5YXNjaGVnbG92QHlhLnJ1IiwiZXhwIjoxNDc2ODAwMjUyMzIxfQ.bk0kNzDF8mf7bu4M3jUb2K7PZhLdI-SoV8oseTOXpqQ')
  }
  render() {
    return (
    <div className='o_resource__add'>
      <h2>Добавить ресурс</h2>
      <form className='o_form'>
        <div className='o_form__group'>
          <label>Назавание ресурса</label>
          <input type="text" onChange={this.onInputChange} name="name" maxLength="20" placeholder="Имя" />
        </div>
        <div className='o_form__group'>
          <label>URL ресурса</label>
          <input type="text" onChange={this.onInputChange} name="source" maxLength="20" placeholder="http://" />
        </div>
        <input name="submit" type="submit" value="Добавить" />
      </form>
    </div>
    );
  }
};

export default ResourceAdd;