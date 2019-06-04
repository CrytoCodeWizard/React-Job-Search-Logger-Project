import React,{Component} from 'react'
import Card from 'react-bootstrap/Card'

import {connect} from 'react-redux'

class Role extends Component {

	render() {
		if(!this.props.selectedRole) {
			return null
		} else {
			const {title,company,status,description,requirements} = this.props.selectedRole
			const req = requirements.toString().replace("[","").replace("]","")
			console.log(req)
			return (
				<Card>
					<Card.Body>
						<Card.Title>
							<h2>{title}</h2>
						</Card.Title>
						<Card.Subtitle>
							<p>{company}</p>
						</Card.Subtitle>
						<Card.Text>
							<small>{status}</small>
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
		selectedRole: state.selectedRole
	}
}

export default connect(mapStateToProps)(Role);