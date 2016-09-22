import React, { Component, PropTypes } from 'react';
import { post } from '../../action/Api';
import { browserHistory } from 'react-router';

class Login extends Component {
	constructor() {
    super()
	    this.state = {
		     email: '',
		     password: ''
		 }
    }
    contextTypes: {
    	email: PropTypes.string.isRequired,
    	password: PropTypes.string.isRequired,
    	router: PropTypes.object.isRequired
  	}
    onInputChange = (e) => {
    	this.setState({
    		[e.target.name]: e.target.value
    	});
    }
    // Регестрируем
	handleSubmit = (e) => {
		e.preventDefault()
		    post('login', this.state).then((user) => {
		    	return user
		    }).then((user) => {
	    	if (user.code === 404) {
	    		// если нет такого пользователя
	    		browserHistory.push('/signup');
	    		return false;
	    	}
	    	console.log(user);		
	    	window.localStorage.clear();
	    	window.localStorage.setItem('o__token', user.token);
	    	window.localStorage.setItem('o__email', user.email);
	    	browserHistory.push('/panel')
	    }).catch((user) => {
	    	console.log('ошибка ' + user)
	    });

  	}
	render() {
		return (
		<div className='o_login'>
			<h2>Войти</h2>
			<form className='o_login__form' onSubmit={this.handleSubmit}>
        	  	<div className='o_login__input'>
        	  		<input onChange={this.onInputChange} name="email" ref="email" type="email" placeholder='email'/>
        	  	</div>
        	  	<div className='o_login__input'>
        	  		<input onChange={this.onInputChange} name="password" ref="password" type='password' placeholder='password'/>
        	  	</div>
        	  	<button className='o_login__button' disabled={this.state.email ? false : true} type='submit'>Войти</button>
        	</form>
        </div>
		);
	}
};

export default Login;
