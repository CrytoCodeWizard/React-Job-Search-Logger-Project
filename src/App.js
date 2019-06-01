import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'

import './index.css';

import Navbar from './components/Navbar'
import Home from './containers/Home'
import Roles from './containers/Roles'


function App() {
	return (
		<div className="App">
			<header className="App-header">
				Job Search Logger
      </header>
			<Navbar />
			<BrowserRouter>
				<Route path="/" component={Home} />
				<Route path="/roles" component={Roles} />
			</BrowserRouter>
		</div>
	);
}

export default App;

