import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'

import './index.css';

import Navbar from './components/Navbar'
import Home from './containers/Home'
import Roles from './containers/Roles'
import NewRoleForm from './components/NewRoleForm'
import Footer from './containers/Footer'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route path="/" component={Home} />
				<Route component={Navbar} />
				<Route exact path="/roles" component={Roles} />
				<Route path="/roles/new" component={NewRoleForm} />
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;

