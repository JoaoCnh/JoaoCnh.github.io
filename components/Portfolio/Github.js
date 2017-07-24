import { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import Card from './Card';
import Fade from '../anim/Fade';
import Loading from '../anim/Loading';

export default class extends Component {
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
			    	{this.state.isLoading ? <Loading /> : <div />}
			    	<TransitionGroup>
			    		{this.state.repos.map((repo) => (
								<Fade key={repo.id}>
									<Card repo={repo} />
								</Fade>
							))}
			    	</TransitionGroup>
			    </div>
			  </div>
			</div>
		);
	}
}