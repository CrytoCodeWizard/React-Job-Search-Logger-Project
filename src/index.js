import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

import store from './store'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();