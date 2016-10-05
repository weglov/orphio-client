import React, { Component } from 'react';
import { Link } from 'react-router';
class Header extends Component {
  constructor() {
    super()
      this.state = {
         token: window.localStorage.getItem('o__token') || ''
     }
    }
  appLogout = (e) => {
    window.localStorage.clear();
  }
  render() {
    const {login} = this.props.data;
    return (
        <div className="o__header">
        	<div className="o_container">
	          	<Link to='/panel' className="o__header--logo"></Link>
	          	<div className="o__header_menu">
	          		{login || <Link to='/login'>Войти</Link>}
	      			  {login || <Link to='/signup'>Регистрация</Link>}
                {!login ||<Link to='/login' onClick={this.appLogout}>Выйти</Link>}
	          	</div>
          	</div>
        </div>
    );
  }
};

export default Header;