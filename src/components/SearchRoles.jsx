import React from 'react';
import Form from 'react-bootstrap/Form'

import '../index.css'

const SearchRoles = ({handleSearchChange}) => {
	const handleOptionChange = event => {
		const newValue = event.nativeEvent.target.value
		handleSearchChange(newValue)
	}

	return (
		<>
			<Form onChange={handleOptionChange} >
				<Form.Label>Search by status:</Form.Label>
				<Form.Control as="select">
					<option value="">All</option>
					<option value="Interested">Interested</option>
					<option value="Applied">Applied</option>
					<option value="Interviewing">Interviewing</option>
					<option value="Successful">Successful</option>
					<option value="Rejected">Rejected</option>
					<option value="Not Interested">Not Interested</option>
				</Form.Control >
			</Form >
		</>
	);
}

export default SearchRoles;
