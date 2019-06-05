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
		console.log("handling change")
	}

	handleSubmit = event => {
		event.preventDefault()
		console.log('Submitted!')
	}

	render() {
		return (
			<React.Fragment>
				This is the New Role Form component

				<form onSubmit={this.handleSubmit}>
					<label>Title</label>
					<input name="title" placeholder="Job Title" value="" onChange={this.handleChange} />
					<br />
					<label>Description</label>
					<input name="description" placeholder="Job Description" value="" onChange={this.handleChange} />
					<br />
					<label>Requirements</label>
					<input name="requirements" placeholder="Job Requirements" value="" onChange={this.handleChange} />
					<br />
					<label>Company</label>
					<input name="company" placeholder="Company" value="" onChange={this.handleChange} />
					<br />
					<label>Location</label>
					<input name="location" placeholder="Location" value="" onChange={this.handleChange} />
					<br />
					<label>Status</label>
					<input name="status" placeholder="Status" value="" onChange={this.handleChange} />
					<br />
					<label>URL</label>
					<input name="url" placeholder="Posting url" value="" onChange={this.handleChange} />
					<br />
					<button type="submit">Add</button>
				</form>
			</React.Fragment>
		);
	}
}
export default NewRoleForm;