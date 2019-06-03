import React from 'react'
import {connect} from 'react-redux'
import {getRoles} from '../actions/actions'
import {selectRole} from '../actions/actions'
import Card from 'react-bootstrap/Card'

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
			this.props.roles.map(role =>
				<Card style={{minWidth: '25%',maxwidth: '33%'}}>
					<h1 style={{color: 'red'}}>This is the RoleCard component</h1>
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
			)
		);
	}
}

const mapStateToProps = state => {
	return {
		roles: state.roles,
	}
}

export default connect(mapStateToProps,{getRoles,selectRole})(RoleCard);