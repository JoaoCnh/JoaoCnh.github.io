import CountUp from 'react-countup';

export default ({ repo }) => (
	<div className="col-md-4 col-sm-4 col-xs-6 card">
		<span className="card-header-icon">
			<i className="fa fa-star-o fa-3x"></i>
			<CountUp start={0} end={repo.stargazers_count} />
		</span>
		<span className="card-header-icon">
			<i className="fa fa-code-fork fa-3x"></i>
			<CountUp start={0} end={repo.forks_count} />
		</span>
		<h4 className="card-title">{repo.name}</h4>
		<h6 className="card-subtitle mb-2 text-muted">{repo.full_name}</h6>
		<p className="card-text">{repo.description}</p>
		<a href={repo.html_url} target="_blank">
			{`See on Github `}
		</a>
	</div>
);