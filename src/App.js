import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'

import './index.css';

import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './containers/Home'
import Roles from './containers/Roles'
import NewRoleForm from './components/NewRoleForm'
import Footer from './components/Footer'

function App() {
	return (
		<div className="App">
			<Header />
			<BrowserRouter>
				<Route component={Navbar} />
				<Route exact path="/" component={Home} />
				<Route exact path="/roles" component={Roles} />
				<Route path="/roles/new" component={NewRoleForm} />
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;

