import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

const StatusButton = ({onClick}) => {
	return (
		<>
			<Dropdown.Item
				as="button"
				value="Interested"
				onClick={onClick}>
				Interested
			</Dropdown.Item>
			<Dropdown.Item
				as="button"
				value="Applied"
				onClick={onClick}>
				Applied
			</Dropdown.Item>
			<Dropdown.Item
				as="button"
				value="Interviewing"
				onClick={onClick}>
				Interviewing
			</Dropdown.Item>
			<Dropdown.Item
				as="button"
				value="Successful"
				onClick={onClick}>
				Successful
			</Dropdown.Item>
			<Dropdown.Item
				as="button"
				value="Rejected"
				onClick={onClick}>
				Rejected
			</Dropdown.Item>
			<Dropdown.Item
				as="button"
				value="Not interested"
				onClick={onClick}>
				Not interested
			</Dropdown.Item>
		</>
	)
}

export default StatusButton;
