import React, { Component, PropTypes } from 'react';
import { post } from '../../action/Api';

class Signup extends Component {
	
	constructor() {
    super()
	    this.state = {
		     name: '',
		     email: '',
		     password: ''
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
    // Регестрируем
	handleSubmit = (e) => {
	    e.preventDefault()
	    post('users', this.state).then((user) => {
	    	return user
	    }).then((user) => {
	    	if (user.code === 400) {
	    		// todo проверка на логин
	    		return false;
	    	}
	    	console.log(user);
	    }).catch((user) => {
	    	console.log('ошибка' + user)
	    });
		window.localStorage.clear();
  	}
	render() {
		return (
		<div className='o_login'>
		<h2>Зарегистрироваться</h2>
			<form className='o_login__form' onSubmit={this.handleSubmit}>
        	  	<div className='o_login__input'>
        	  		<input onChange={this.onInputChange} name="name" ref="login"  type='text' placeholder='login'/>
        	  	</div>
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

export default Signup;


// load(e).then((stories) => {
//             this.setState({
//                 data: stories.data[0],
//                 date: moment(stories.data[0].created*1000).format('LT, LL')
//             });
//         });