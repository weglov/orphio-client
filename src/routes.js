import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Компоненты
import App from './App';
import Login from './components/login/login';
import Panel from './components/panel/panel';

export const routes = (
	<Route path="/" component={App} >
		<IndexRoute component={Login} />
		<Route path='/panel' component={Panel} onEnter={Panel.onEnter}/>
		<Route path='/login' component={Login} />
    </Route>
)