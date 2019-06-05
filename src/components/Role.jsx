import React,{Component} from 'react'
import Card from 'react-bootstrap/Card'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'

import '../index.css'

import {connect} from 'react-redux'
import {updateRole,getRoles} from '../actions/actions'


class Role extends Component {

	componentDidMount() {
		console.log('!!!! 1 selectedRole',this.props.selectedRole)
		console.log('!!!! 2 roles',this.props.roles)
		this.props.getRoles()
		console.log("!!!!3 roles: ",this.props.roles)
	}
	handleChange = event => {
		const value = event.target.value
		this.props.updateRole(this.props.selectedRole,value)
		// this.props.getRoles()
	}

	render() {
		if(!this.props.selectedRole) {
			return null
		} else {
			const {title,company,status,description,requirements} = this.props.selectedRole
			const req = requirements.toString().replace("[","").replace("]","")
			return (
				<Card>
					<Card.Body>
						<Card.Title>
							<h2>{title}</h2>
						</Card.Title>
						<Card.Subtitle>
							{company}
						</Card.Subtitle>
						<Card.Text>
							<small>{status}</small>
							<DropdownButton size="sm" id="dropdown-item-button" title={status}>
								<Dropdown.Item
									as="button"
									value="Interested"
									onClick={this.handleChange}>
									Interested
								</Dropdown.Item>
								<Dropdown.Item
									as="button"
									value="Applied"
									onClick={this.handleChange}>
									Applied
								</Dropdown.Item>
								<Dropdown.Item
									as="button"
									value="Interviewing"
									onClick={this.handleChange}>
									Interviewing
								</Dropdown.Item>
								<Dropdown.Item
									as="button"
									value="Successful"
									onClick={this.handleChange}>
									Successful
								</Dropdown.Item>
								<Dropdown.Item
									as="button"
									value="Rejected"
									onClick={this.handleChange}>
									Rejected
								</Dropdown.Item>
								<Dropdown.Item
									as="button"
									value="Not intereste"
									onClick={this.handleChange}>
									Not interested
								</Dropdown.Item>
							</DropdownButton>
							<br />
							{description}
							<br /><br />
							<strong>Requirements: </strong>{req}
						</Card.Text>
					</Card.Body>
					<ButtonToolbar>
						<Button type="submit">Edit</Button>
						<Button variant="danger" type="submit">Delete</Button>
					</ButtonToolbar>
				</Card>
			);
		}
	}
}

const mapStateToProps = state => {
	// console.log('!!!!',state)
	return {
		selectedRole: state.selectedRole,
		roles: state.roles
	}
}

export default connect(mapStateToProps,{getRoles,updateRole})(Role);
