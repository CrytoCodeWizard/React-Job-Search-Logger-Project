import React,{Component} from 'react'
import Card from 'react-bootstrap/Card'
import DropdownButton from 'react-bootstrap/DropdownButton'

import '../index.css'

import {connect} from 'react-redux'
import {updateRole} from '../actions/actions'
import StatusButton from './StatusButton'

class Role extends Component {
	handleChange = event => {
		const value = event.target.value
		this.props.updateRole(this.props.selectedRole,value)
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
						<Card.Text as='div'>
							<DropdownButton size="sm" id="dropdown-item-button" title={status}>
								<StatusButton onClick={this.handleChange} />
							</DropdownButton>
							<br />
							{description}
							<br /><br />
							<strong>Requirements: </strong>{req}
						</Card.Text>
					</Card.Body>
				</Card>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		selectedRole: state.selectedRole,
		roles: state.roles
	}
}

export default connect(mapStateToProps,{updateRole})(Role);
