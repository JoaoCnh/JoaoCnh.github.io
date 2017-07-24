import React from 'react';

import Card from './Card';

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			repos: [],
		};
	}

	async componentDidMount() {
		this.setState({ isLoading: true });

		const res = await fetch('https://api.github.com/users/JoaoCnh/repos');
		const repos = await res.json();

		this.setState({
			repos,
			isLoading: false,
		});
	}

	render() {
		if (this.state.isLoading) {
			return (<h1>loading</h1>);
		}

		const repos = this.state.repos.map((repo) => (
			<Card key={repo.id} repo={repo} />
		));

		return (
			<div className="card-columns">
				{repos}
			</div>
		);
	}
}