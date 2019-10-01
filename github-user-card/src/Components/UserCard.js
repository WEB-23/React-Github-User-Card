import React from 'react';
import axios from 'axios';

import FollowerCard from './FollowerCard.js';

class UserCard extends React.Component {
	constructor(props) {
		super(props);
		// * setting initial value of state to an empty string
		this.state = { imgUrl: '', name: '' };
	}

	async componentDidMount() {
		const url = `https://api.github.com/users/${this.props.userName}`;
		let response = await axios.get(url);
		let data = response.data;
		this.setState({
			imgUrl: data.avatar_url,
			name: data.name,
			followers: data.followers,
			username: data.login,
			url: data.url,
			login: data.login
		});
		console.log(response.data);
	}

	render() {
		return (
      <>
        <div className="user-card">
          <h1>GithubUserCard </h1>
          <img src={this.state.imgUrl} alt="" />
          <h2>Name: {this.state.name}</h2>
          <p>Username: {this.state.login}</p>
          <p>Followers: {this.state.followers}</p>
          <a href={`https://github.com/${this.state.username}`}>{`https://github.com/${this.state.username}`}</a>
        </div>
        <h2>Followers</h2>
        <FollowerCard username={this.props.userName} />
      </>
		);
	}
}

export default UserCard;
