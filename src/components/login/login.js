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
    componentDidMount() {
    	const token = window.localStorage.getItem('o__token');
    	if (token) {
    		browserHistory.push('/panel');
    	}
    }
    // логин
	handleSubmit = (e) => {
		e.preventDefault()	
		    // Выдача токенов если есть такой парень
		    post('login', this.state).then((user) => {
		    	return user
		    }).then((user) => {
		    	if (user.code === 404 || user.code === 401) {
		    		// если нет такого пользователя
		    		browserHistory.push('/signup');
		    		return Promise.reject();
		    	}
	    	window.localStorage.setItem('o__token', user.token);
	    	window.localStorage.setItem('o__email', user.email);
	    	window.localStorage.setItem('o__id', user.id);
	    	this.props.login(user)
	    	browserHistory.push('/panel');
	    	return user;
	    }).catch((user) => {
	    	this.props.logout(user)
	    	console.log('ошибка ' + user)
	    });

  	}
	render() {
		return (
		<div className='o_login'>
			<div className='o_container'>
			<h1>Вход</h1>
			<form className='o_form o_login__form' onSubmit={this.handleSubmit}>
        	  	<div className='o_login__input'>
        	  		<input onChange={this.onInputChange} name="email" ref="email" type="email" placeholder='email'/>
        	  	</div>
        	  	<div className='o_login__input'>
        	  		<input onChange={this.onInputChange} name="password" ref="password" type='password' placeholder='password'/>
        	  	</div>
        	  	<button className='o_login__button' disabled={this.state.email ? false : true} type='submit'>Войти</button>
        	</form>
        	</div>
        </div>
		);
	}
};

function mapStateToProps(state) {
  return { index: state.login }
}



export default connect(mapStateToProps, {login, logout})(Login)

