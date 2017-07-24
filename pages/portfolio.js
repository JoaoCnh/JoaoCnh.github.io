import Layout from '../layouts/main';
import Portfolio from '../components/Portfolio';

export default () => (
	<Layout>
		<div id="portfolio-header">
			<div className="container">
				<div className="row">
					<div className="col-md-12 col-sm-12"></div>
				</div>
			</div>
		</div>
		<Portfolio />
	</Layout>
);