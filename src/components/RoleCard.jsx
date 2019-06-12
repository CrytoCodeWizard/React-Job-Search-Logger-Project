import React from 'react'
import {connect} from 'react-redux'
import {getRoles,selectRole,resetSelectedRole} from '../actions/actions'
import Card from 'react-bootstrap/Card'

import '../index.css'

import SearchRoles from './SearchRoles'
import LikesButton from './LikesButton'

class RoleCard extends React.Component {
	state = {
		searchValue: ""
	}

	componentDidMount() {
		this.props.getRoles()
	}

	handleClick = (event,role) => {
		event.preventDefault()
		this.props.selectRole(role)
	}

	handleSearchChange = value => {
		this.setState({
			searchValue: value
		})
		this.props.resetSelectedRole()
	}

	cardFound = role => {
		return (
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
					<LikesButton />
				</Card.Body>
			</Card >
		)
	}

	cardNotFound = () => {
		return (
			<Card>
				<Card.Body>
					<Card.Title>
						There are no results for Roles with '{this.state.searchValue}' status
					</Card.Title>
				</Card.Body>
			</Card>
		)
	}

	render() {
		const allRoles = this.props.roles.map(role => this.cardFound(role))

		const filteredRoles = this.props.roles.filter(role => role.status === this.state.searchValue)

		const selectedFoundRoles =
			<>
				{
					filteredRoles.map(role => {
						if(filteredRoles.length > 0) {
							return this.cardFound(role)
						}
					})
				}
			</>

		const selectedNotFoundRoles = this.cardNotFound()

		const selectedRoles = (filteredRoles.length > 0) ? selectedFoundRoles : selectedNotFoundRoles

		return (
			<>
				{!this.state.searchValue ? allRoles : selectedRoles}
				<div id="searchComp">
					<SearchRoles handleSearchChange={this.handleSearchChange} />
				</div>
			</>
		)
	}
}

const mapStateToProps = state => {
	return {
		roles: state.roles
	}
}

export default connect(mapStateToProps,{getRoles,selectRole,resetSelectedRole})(RoleCard);