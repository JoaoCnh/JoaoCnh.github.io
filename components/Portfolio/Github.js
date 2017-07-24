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

		setTimeout(() => {
			this.setState({
				repos,
				isLoading: false,
			});
		}, 1500);
	}

	render() {
		if (this.state.isLoading) {
			return (
				<div className="container">
					<div className="loading-container">
						<div className="sk-folding-cube">
						  <div className="sk-cube1 sk-cube"></div>
						  <div className="sk-cube2 sk-cube"></div>
						  <div className="sk-cube4 sk-cube"></div>
						  <div className="sk-cube3 sk-cube"></div>
						</div>
					</div>
				</div>
			);
		}

		const repos = this.state.repos.map((repo) => (
			<Card key={repo.id} repo={repo} />
		));

		return (
			<div id="portfolio">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h2>
								<i className="fa fa-github"></i>
								<span style={{marginLeft: 10}}>{`Recent Projects`}</span>
							</h2>
			        <p>{`My Github projects/repos`}</p>
						</div>
			    </div>
			    <div className="row mt30">
			    	{repos}
			    </div>
			  </div>
			</div>
		);
	}
}