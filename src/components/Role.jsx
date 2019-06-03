import React,{Component} from 'react'
import Card from 'react-bootstrap/Card'

import {connect} from 'react-redux'

class Role extends Component {

	render() {
		return (
			<Card>
				<h1 style={{color: 'red'}}>This is the Role component</h1>
				<Card.Body>
					<Card.Title>
						<h2>A title</h2>
						{/* <h2>{this.state.title}</h2> */}
					</Card.Title>
					<Card.Subtitle>
						<p>A subtitle</p>
						{/* <p>{this.state.company}  <small>{this.state.location}</small></p> */}
					</Card.Subtitle>
					<Card.Text>
						<small>Some text</small>
						{/* <small>Status: {this.state.status}</small> */}
					</Card.Text>
				</Card.Body>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	console.log('@@@ state from mapStateToProps',state)
	return {
		selectedRole: state.selectedRole
	}
}

export default connect(mapStateToProps)(Role);