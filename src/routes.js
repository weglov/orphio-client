import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Компоненты
import App from './App';
import Login from './components/login/login';
import Signup from './components/login/signup';
import NotFound from './components/page/404';
import Panel from './components/panel/panel';

export const routes = (
	<Route path="/" component={App} >
		<IndexRoute component={Panel} />
		<Route path='/panel' component={Panel} onEnter={Panel.onEnter}/>
		<Route path='/login' component={Login} />
		<Route path='/signup' component={Signup} />
		<Route path="*" component={NotFound}/>
    </Route>
)