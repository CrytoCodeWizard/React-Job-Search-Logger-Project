import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'

import RoleCard from '../components/RoleCard'
import Role from '../components/Role'

const Roles = () => {
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

