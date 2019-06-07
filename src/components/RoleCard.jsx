import React from 'react'
import {connect} from 'react-redux'
import {getRoles} from '../actions/actions'
import {selectRole} from '../actions/actions'
import Card from 'react-bootstrap/Card'

import '../index.css'

import SearchRoles from './SearchRoles'

class RoleCard extends React.Component {
	state = {
		searchValue: "",
		searchTriggered: false
	}

	componentDidMount() {
		this.props.getRoles()
	}

	handleClick = (event,role) => {
		event.preventDefault()
		this.props.selectRole(role)
	}

	handleSearchChange = event => {
		console.log('!!!!1 value passed from SearchRoles to RoleCard event.nativeEvent.target.value: ',event.nativeEvent.target.value)

		const searchedValue = event.nativeEvent.target.value
		console.log('!!!!2 value passed from SearchRoles to RoleCard searchedValue: ',searchedValue)

		this.setState({
			searchValue: searchedValue
		})
		console.log('!!!!4 RoleCard state afer handleSearchChange: ',this.state)
		console.log('!!!!5 RoleCard state.searchValue afer handleSearchChange: ',this.state.searchValue)
		console.log('!!!!6 RoleCard state.searchTriggered afer handleSearchChange: ',this.state.searchTriggered)
	}

	handleSearchSubmit = event => {
		event.preventDefault()
		this.setState({
			searchValue: event.nativeEvent.target.value,
			searchTriggered: true
		})
		console.log('!!!!7 RoleCard state.searchValue afer handleSearchChange: ',this.state.searchValue)
		console.log('!!!!8 RoleCard state.searchTriggered afer handleSearchChange: ',this.state.searchTriggered)
	}

	render() {
		const allRoleCards = this.props.roles.map(role =>
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

		const selectedRoleCards = `Searched for Roles${this.state.searchValue}`
		// this.props.roles.filter(role => 
		// 	console.log('!!!!11 selectedRoleCards role.status: ',role.status)
		// })

		return (
			<>
				{!this.state.searchTriggered ? allRoleCards : selectedRoleCards}
				<div id="searchComp">
					<SearchRoles handleSearchChange={this.handleSearchChange} handleSearchSubmit={this.handleSearchSubmit} />
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