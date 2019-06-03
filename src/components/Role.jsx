import React,{Component} from 'react'
import Card from 'react-bootstrap/Card'

import {connect} from 'react-redux'

class Role extends Component {

	render() {
		if(!this.props.selectedRole) {
			return null
		} else {
			return (
				<Card>
					<h1 style={{color: 'red'}}>This is the Role component</h1>
					<Card.Body>
						<Card.Title>
							<h2>{this.props.selectedRole.title}</h2>
						</Card.Title>
						<Card.Subtitle>
							<p>{this.props.selectedRole.company}</p>
						</Card.Subtitle>
						<Card.Text>
							<small>{this.props.selectedRole.status}</small>
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