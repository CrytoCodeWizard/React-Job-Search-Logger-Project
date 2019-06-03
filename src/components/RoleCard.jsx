import React from 'react'

import Card from 'react-bootstrap/Card'


class RoleCard extends React.Component {

	render() {
		return (
			<Card style={{minWidth: '25%',maxwidth: '33%'}}>
				<h1 style={{color: 'red'}}>This is the RoleCard component</h1>
				<Card.Body>
					<Card.Title>
						<a href="#">title</a>
						{/* <a href={"/roles/"+props.role.id}>{props.role.title}</a> */}
					</Card.Title>
					<Card.Subtitle>
						<p>A subtitle</p>
						{/* <p>{props.role.company}  <small>{props.role.location}</small></p> */}
					</Card.Subtitle>
					<Card.Text>
						<small>Some text</small>
						{/* <small>Status: {props.role.status}</small> */}
					</Card.Text>
				</Card.Body>
			</Card >
		);
	}
}

export default RoleCard;