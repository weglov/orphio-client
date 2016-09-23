import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
        <div className="o__header">
        	<div className="o_container">
	          	<Link to='/panel' className="o__header--logo"></Link>
	          	<div className="o__header_menu">
	          		<Link to='/login'>Войти</Link>
	      			<Link to='/signup'>Регистрация</Link>
	          	</div>
          	</div>
        </div>
    );
  }
};

export default Header;