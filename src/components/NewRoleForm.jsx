import React,{Component} from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class NewRoleForm extends Component {
	state = {
		formData: {
			title: '',
			description: '',
			requirements: [],
			company: '',
			location: '',
			status: 'Interested',
			url: ''
		}
	}

	handleChange = event => {
		const {name,value} = event.target
		this.setState({
			formData: {
				...this.state.formData,
				[name]: value
			}
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		// Action to fetch POST to api
		console.log('Submitted!')
	}

	render() {
		const {title,description,requirements,company,location,status,url} = this.state.formData
		return (
			<React.Fragment>
				This is the New Role Form component

				<Form className='form-container' style={{margin: '20px'}} onSubmit={this.handleSubmit}>
					<Form.Row>
						<Form.Group as={Col}>
							<Form.Label>Title</Form.Label>
							<Form.Control type="text" name="title" placeholder="Job Title..." value={title} onChange={this.handleChange} />
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Label>Company</Form.Label>
							<Form.Control type="text" name="company" placeholder="Company..." value={company} onChange={this.handleChange} />
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Label>Location</Form.Label>
							<Form.Control type="text" name="location" placeholder="Location..." value={location} onChange={this.handleChange} />
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} controlId="formGridDescription">
							<Form.Label>Description</Form.Label>
							<Form.Control type="textarea" name="description" placeholder="Job Description" value={description} onChange={this.handleChange} />
						</Form.Group>
						<Form.Group as={Col} controlId="formGridRequirements">
							<Form.Label>Requirements</Form.Label>
							<Form.Control type="textarea" name="requirements" placeholder="Job Requirements" value={requirements} onChange={this.handleChange} />
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} controlId="formGridURL">
							<Form.Label>URL</Form.Label>
							<Form.Control type="text" name="url" placeholder="Posting url" value={url} onChange={this.handleChange} />
						</Form.Group>
						<Form.Group as={Col} controlId="formGridStatus">
							<Form.Label>Status</Form.Label>
							<Form.Control type="text" name="status" placeholder="Status" value={status} onChange={this.handleChange} />
						</Form.Group>
					</Form.Row>
					<Button type="submit">Add</Button>
				</Form>
			</React.Fragment>
		);
	}
}
export default NewRoleForm;

