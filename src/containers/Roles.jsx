import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'

import RoleCard from '../components/RoleCard'
import Role from '../components/Role'

const Roles = () => {
	return (
		<CardGroup>
			<RoleCard />
		</CardGroup>
		<Role />
	)
}

export default Roles

