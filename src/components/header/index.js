import React, { Component } from 'react';
import { Link } from 'react-router';
import LoadingBar from '../ui/loaderbar.js'

class Header extends Component {
  constructor() {
    super()
      this.state = {
         token: window.localStorage.getItem('o__token') || '',
         loader: true
     }
    }
  appLogout = (e) => {
    this.props.actions.logout();
    window.localStorage.clear();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      loader: nextProps.loader 
    });
  }
  render() {
    const {login} = this.props.data;
    return (
        <div className="o__header">
        	<div className="o_container">
	          	<Link to='/' className="o__header--logo"></Link>
	          	<div className="o__header_menu">
	          		{login || <Link to='/login'>Войти</Link>}
	      			  {login || <Link to='/signup'>Регистрация</Link>}
                {!login ||<Link to='/panel/resource' >Ресурсы</Link>}
                {!login ||<Link to='/panel/settings' >Настройки</Link>}
                {!login ||<Link to='/login' onClick={this.appLogout}>Выйти</Link>}
	          	</div>
          	</div>
             <LoadingBar active={this.state.loader}/>
        </div>
    );
  }
};

export default Header;