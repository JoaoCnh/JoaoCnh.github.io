import Github from './Github';
import Medium from './Medium';

export default () => (
	<div>
		<h1>{`Github Repos`}</h1>
		<Github />
		<h1>{`Medium Stories`}</h1>
		<Medium />
	</div>
);