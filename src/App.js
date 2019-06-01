import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'

import './index.css';

import Navbar from './components/Navbar'
import Home from './containers/Home'
import Roles from './containers/Roles'


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route path="/" component={Home} />
				<Route component={Navbar} />
				<Route path="/roles" component={Roles} />
			</BrowserRouter>
		</div>
	);
}

export default App;

