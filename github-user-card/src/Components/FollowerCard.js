import React from 'react';
import axios from 'axios';

import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class FollowerCard extends React.Component {
	constructor() {
		super();
		this.state = { followersData: [] };
	}

	async componentDidMount() {
		await this.getFollowers();
	}

	getFollowers = (e) => {
		axios
			.get(`https://api.github.com/users/${this.props.username}/followers`)
			.then((res) => {
				console.log(res.data);
				this.setState({
					followersData: res.data
				});
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<Card.Group itemsPerRow={5}>
				{this.state.followersData.map((follower) => {
					return <Card image={`${follower.avatar_url}`} header={follower.login} />;
				})}
			</Card.Group>
		);
	}
}

export default FollowerCard;
