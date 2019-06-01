import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'

import RoleCard from '../components/RoleCard'
import Role from '../components/Role'

const Roles = () => {
	{/* React.Fragment AND h1 ADDED FOR VISUAL AID AND TO BE REMOVED ONCE ALL WORKS */}
	return (
		<React.Fragment>
			<h1 style={{color: 'red'}}>This is the Roles component</h1>
			<CardGroup>
				<RoleCard />
			</CardGroup>
			<Role />
		</React.Fragment>
	)
}

export default Roles

