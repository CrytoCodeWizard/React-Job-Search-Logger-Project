import React,{Component} from 'react';

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

				<form onSubmit={this.handleSubmit}>
					<label>Title</label>
					<input name="title" placeholder="Job Title" value={title} onChange={this.handleChange} />
					<br />
					<label>Description</label>
					<input name="description" placeholder="Job Description" value={description} onChange={this.handleChange} />
					<br />
					<label>Requirements</label>
					<input name="requirements" placeholder="Job Requirements" value={requirements} onChange={this.handleChange} />
					<br />
					<label>Company</label>
					<input name="company" placeholder="Company" value={company} onChange={this.handleChange} />
					<br />
					<label>Location</label>
					<input name="location" placeholder="Location" value={location} onChange={this.handleChange} />
					<br />
					<label>Status</label>
					<input name="status" placeholder="Status" value={status} onChange={this.handleChange} />
					<br />
					<label>URL</label>
					<input name="url" placeholder="Posting url" value={url} onChange={this.handleChange} />
					<br />
					<button type="submit">Add</button>
				</form>
			</React.Fragment>
		);
	}
}
export default NewRoleForm;