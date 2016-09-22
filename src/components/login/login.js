import React, { Component, PropTypes } from 'react';

class Login extends Component {
	constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    }
	handleSubmit(e) {
	    e.preventDefault()
	    var login = e.target.elements[0].value
	    window.localStorage.clear();
	    window.localStorage.setItem('o__token', login);
	    if (login === 'admin') {
	      this.context.router.push('/panel')
	    } else {
	      this.context.router.push('/')
	    }
  	}
	render() {
		return (
		<div className='o_login'>
			<form className='o_login__form' onSubmit={this.handleSubmit}>
        	  	<div className='o_login__input'>
        	  		<input type='text' placeholder='login'/>
        	  	</div>
        	  	<div className='o_login__input'>
        	  		<input type='text' placeholder='password'/>
        	  	</div>
        	  	<button className='o_login__button' type='submit'>Войти</button>
        	</form>
        </div>
		);
	}
};
Login.contextTypes = {
  router: PropTypes.object.isRequired
}
export default Login;