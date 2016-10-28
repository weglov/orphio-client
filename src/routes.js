import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'

// Компоненты
import App from './App';
import Login from './components/login/login';
import Signup from './components/login/signup';
import NotFound from './components/page/404';
import Panel from './components/panel/panel';
import AddResourcePage from './components/panel/resource/add_page';
/* Компоненты Панели*/
import Resource from './components/panel/resource';
import Settings from './components/panel/settings';
import MistakePage from './components/panel/m';



export const routes = (
	<Route path="/" component={App} >
		<IndexRedirect to='panel' />
		<Route path='/panel' component={Panel} onEnter={Panel.onEnter}>
			<IndexRoute component={MistakePage} />
			<Route path='resource/add' component={AddResourcePage} />
			<Route path='resource' component={Resource} />
			<Route path='settings' component={Settings} />
		</Route>
		<Route path='/login' component={Login} />
		<Route path='/signup' component={Signup} />
		<Route path="*" component={NotFound}/>
    </Route>
)