import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { post } from '../../actions/Api';

class Signup extends Component {
	
	constructor() {
    super()
	    this.state = {
		     email: '',
		     password: '',
		     valid_email: true,
		     valid_password: true,
		     message: '',
		     success: false
		 }
    }
    contextTypes: {
    	name: PropTypes.string.isRequired,
    	email: PropTypes.string.isRequired,
    	password: PropTypes.string.isRequired,
    	router: PropTypes.object.isRequired
  	}
    onInputChange = (e) => {
    	this.setState({
    		[e.target.name]: e.target.value
    	});
    }
    messageError = (e, status) => {
    	if (status) {
    		this.setState({ 
    			message: e,
    			email: '',
		     	password: '',
		     	success: 'success'
		       });
    	} else {
    		this.setState({ message: e, success: 'error' });
    	}
    }
    // Регестрируем
	handleSubmit = (e) => {
	    e.preventDefault()
	    if (this.state.email.length && this.state.password.length) {
		    post('users', this.state).then((user) => {
		    	return user
		    }).then((user) => {
		    	if (user.code === 400 || user.code === 403) {
		    		// todo проверка на логин
		    		return Promise.reject();
		    	}
		    	this.messageError('Пользователь успешно зарегистрирован', true)
		    }).catch((user) => {
		    	this.messageError('Такой пользователь уже есть')
		    });
			window.localStorage.clear();
  		} else {
  			this.setState({
				valid_email: this.state.email.length ? true : false,
				valid_password: this.state.password.length ? true : false,
				message: 'Необходимо заполнить все поля'
			});
  		}
  	}
	render() {
		return (
		<div className='o_signup'>
			<div className='o_container'>
				<h1>Зарегистрироваться</h1>
				<div className="o_login__form">
				{this.state.message ? <div className={"o_login__" + this.state.success}>{this.state.message} {this.state.success === 'success' ? <Link to='/panel'>Войти &rarr;</Link> : null }</div> : null }
				<form className='o_form' onSubmit={this.handleSubmit}>
	        	  	<div className='o_login__input'>
	        	  		<input onChange={this.onInputChange} name="email" ref="email" type="email" placeholder='email'/>
	        	  	</div>
	        	  	<div className='o_login__input'>
	        	  		<input onChange={this.onInputChange} name="password" ref="password" type='password' placeholder='password'/>
	        	  	</div>
	        	  	<button className='o_login__button' disabled={this.state.email ? false : true} type='submit'>Зарегестрироваться</button>
	        	</form>
	        	</div>
        	</div>
        </div>
		);
	}
};

export default Signup;
