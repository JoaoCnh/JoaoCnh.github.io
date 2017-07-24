export default ({ repo }) => (
	<div className="card mb-2">
		<div className="card-block">
			<h4 className="card-title">{repo.name}</h4>
			<h6 className="card-subtitle mb-2 text-muted">{repo.full_name}</h6>
			<p className="card-text">{repo.description}</p>
			<a href={repo.html_url} target="_blank">
				{`See on Github `}
			</a>
		</div>
	</div>
);