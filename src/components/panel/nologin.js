import React, { Component } from 'react';
import { Link } from 'react-router';

class Nologin extends Component {
  render() {
    return (
    <div className='o_login'>
      <div>Нет логина</div>
      <Link to='/login'>Войти</Link>
      <Link to='/signup'>Регистрация</Link>
    </div>
    );
  }
};

export default Nologin;