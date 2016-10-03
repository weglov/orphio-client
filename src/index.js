import React from 'react'
import ReactDOM from 'react-dom'
import { routes } from './routes'
import { Router, browserHistory } from 'react-router'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'

const store = configureStore()

ReactDOM.render((
    <Provider store={store}>
  		<Router history={browserHistory} routes={routes}>
  		</Router>
    </Provider>
),  document.getElementById('root')
);
