import React from 'react';
import Form from 'react-bootstrap/Form'

import '../index.css'

const SearchRoles = ({handleSearchChange}) => {
	const handleOptionChange = event => {
		const newValue = event.nativeEvent.target.value
		handleSearchChange(newValue)
	}

	const statuses = ["All","Interested","Applied","Interviewing","Successful","Rejected","Not Interested"]

	const optionList = statuses.map(opt => {
		if(opt === "All") {
			return <option value="">{opt}</option>
		}
		return <option value={opt}>{opt}</option>
	})

	return (
		<Form onChange={handleOptionChange} >
			<Form.Label>Search by status:</Form.Label>
			<Form.Control as="select">
				{optionList}
			</Form.Control >
		</Form >
	)

}

export default SearchRoles;



