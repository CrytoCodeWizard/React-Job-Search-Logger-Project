import React from 'react'
import {connect} from 'react-redux'
import {getRoles} from '../actions/actions'
import {selectRole,resetSelectedRole} from '../actions/actions'
import Card from 'react-bootstrap/Card'

import '../index.css'

import SearchRoles from './SearchRoles'

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

	render() {
		const allRoles = this.props.roles.map(role =>
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
		)

		const filteredRoles = this.props.roles.filter(role => role.status === this.state.searchValue)

		const selectedFoundRoles =
			<>
				{
					filteredRoles.map(role => {
						if(filteredRoles.length > 0) {
							return (<Card key={role.id} style={{minWidth: '25%',maxwidth: '33%'}}>
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
							</Card >)
						}
					})
				}
			</>
		const selectedNotFoundRoles =
			<>
				<Card>
					<Card.Body>
						<Card.Text>
							<p>There are no results for Roles with '{this.state.searchValue}' status</p>
						</Card.Text>
					</Card.Body>
				</Card>
			</>

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