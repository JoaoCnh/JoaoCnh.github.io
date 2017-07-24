import React from 'react';

import Card from './Card';

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			stories: [],
		};
	}

	async componentDidMount() {
		this.setState({ isLoading: true });

		const res = await fetch('https://medium.com/@joomiguelcunha/latest?format=json');
		const json = await res.json();

		const stories = json.payload.streamItems.map(() => {
			return {
				
			};
		});

		this.setState({
			stories,
			isLoading: false,
		});
	}

	render() {
		if (this.state.isLoading) {
			return (<h1>loading</h1>);
		}

		

		return (
			<div className="card-columns">
				
			</div>
		);
	}
}