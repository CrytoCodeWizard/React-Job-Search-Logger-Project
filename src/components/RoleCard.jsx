import React from 'react'
import {connect} from 'react-redux'
import {getRoles} from '../actions/actions'
import {selectRole} from '../actions/actions'
import Card from 'react-bootstrap/Card'

import '../index.css'

import SearchRoles from './SearchRoles'

class RoleCard extends React.Component {

	componentDidMount() {
		this.props.getRoles()
	}

	handleClick = (event,role) => {
		event.preventDefault()
		this.props.selectRole(role)
	}

	render() {
		return (
			<>
				{this.props.roles.map(role =>
					<Card key={role.id} style={{minWidth: '25%',maxwidth: '33%'}}>
						<Card.Body>
							<Card.Title>
								<a href={"/roles/" + role.id} onClick={(event) => this.handleClick(event,role)}>{role.title}</a>
							</Card.Title>
							<Card.Subtitle>
								<p>{role.company}  <small>{role.location}</small></p>
							</Card.Subtitle>
							<Card.Text>
								<small>Status: {role.status}</small>
							</Card.Text>
						</Card.Body>
					</Card >
				)}
				<div id="searchComp">
					<SearchRoles />
				</div>
			</>
		)
	}
}


const mapStateToProps = state => {
	return {
		roles: state.roles,
	}
}

export default connect(mapStateToProps,{getRoles,selectRole})(RoleCard);