import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'

import RoleCard from '../components/RoleCard'
import Role from '../components/Role'

const Roles = () => {
	return (
		<div style={{margin: '5px'}}>
			<CardGroup>
				<RoleCard />
			</CardGroup>
			<Role />
		</div>
	)
}

export default Roles

