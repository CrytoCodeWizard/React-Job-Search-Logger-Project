import React from 'react'
import Nav from 'react-bootstrap/Nav'

const Navbar = () => {
	return (
		<Nav variant="tabs">
			<Nav.Item>
				<Nav.Link href="/">Home</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="#roles" href="/roles">Saved Roles</Nav.Link>
			</Nav.Item>
		</Nav>
	)
}

export default Navbar