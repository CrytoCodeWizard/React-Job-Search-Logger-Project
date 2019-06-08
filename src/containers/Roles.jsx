import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'

import '../index.css'

import RoleCard from '../components/RoleCard'
import Role from '../components/Role'

const Roles = () => {
	return (
		<div id="roles-comp">
			<CardGroup>
				<RoleCard />
			</CardGroup>
			<Role />
		</div >
	)
}

export default Roles

