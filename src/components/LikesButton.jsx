import React from 'react';

class LikesButton extends React.Component {
	state = {
		likes: 0
	}

	handleLikes = () => {
		this.setState({
			likes: this.state.likes + 1
		})
	}

	render() {
		return (
			<button onClick={this.handleLikes}>Likes: {this.state.likes}</button>
		);
	}
}

export default LikesButton;

