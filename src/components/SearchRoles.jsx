import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


import '../index.css'


const SearchRoles = ({handleSearchChange,handleSearchSubmit}) => {
	// console.log('!!!! props.roles in SearchRoles component: ',props.roles)

	return (
		<>
			<Form onSubmit={handleSearchSubmit} onChange={(event) => handleSearchChange(event)} >
				<Form.Label>Search by status:</Form.Label>
				<Form.Control as="select">
					<option value="Interested">Interested</option>
					<option value="Applied">Applied</option>
					<option value="Interviewing">Interviewing</option>
					<option value="Successful">Successful</option>
					<option value="Rejected">Rejected</option>
					<option value="Not Interested">Not Interested</option>
				</Form.Control>
				<Button type="submit">Search</Button>
			</Form>
		</>
	);
}

export default SearchRoles;
