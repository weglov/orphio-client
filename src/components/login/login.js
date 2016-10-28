import React, { Component, PropTypes } from 'react'
import { post } from '../../actions/Api'
import { connect } from 'react-redux'
import  { login, logout } from '../../actions'
import { browserHistory } from 'react-router'

class Login extends Component {
	constructor() {
    super()
	    this.state = {
		     email: '',
		     password: '',
		     valid_email: true,
		     valid_password: true,
		     message: ''
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
    componentDidMount() {
    	const token = window.localStorage.getItem('o__token');
    	if (token) {
    		browserHistory.push('/panel');
    	}
    }
    messageError = (e) => {
    	this.setState({ message: e });
    }
    // логин
	handleSubmit = (e) => {
		e.preventDefault()	
		if (this.state.email.length && this.state.password.length) {
			// Выдача токенов если есть такой парень
			post('login', this.state).then((user) => {
				    	return user
				    })
					.then((user) => {
				    	if (user.code === 404 || user.code === 401) {
				    		// если нет такого пользователя
				    		return Promise.reject();
				    	}
			    	window.localStorage.setItem('o__token', user.token);
			    	window.localStorage.setItem('o__email', user.email);
			    	window.localStorage.setItem('o__id', user.id);
			    	this.props.login(user)
			    	browserHistory.push('/panel');
			    	return user;
			    	})
			    	.catch((user) => {
			    		this.messageError('Пароль или логин не верны')
			    		this.props.logout(user)
			    	});
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
			<div className='o_login'>
				<div className='o_container'>
				<h1>Вход</h1>
				<div className="o_login__form">
				{this.state.message ? <div className="o_login__error">{this.state.message}</div> : null }
				<form className='o_form' onSubmit={this.handleSubmit}>
	        	  	<div className={'o_login__input ' + this.state.valid_email}>
	        	  		<input onChange={this.onInputChange} name="email" ref="email" type="email" placeholder='email'/>
	        	  	</div>
	        	  	<div className={'o_login__input ' + this.state.valid_password}>
	        	  		<input onChange={this.onInputChange} name="password" ref="password" type='password' placeholder='password'/>
	        	  	</div>
	        	  	<button className='o_login__button' type='submit'>Войти</button>
	        	</form>
	        	</div>
	        	</div>
	        </div>
		);
	}
};

function mapStateToProps(state) {
  return { index: state.login }
}



export default connect(mapStateToProps, {login, logout})(Login)

