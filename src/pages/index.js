import Layout from '../layouts/main';

export default () => (
	<Layout>
		<div id="home">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-3"></div>
          <div className="col-md-7 col-sm-9">
            <h1>João Miguel Cunha</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="divider">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="divider-wrapper divider-one">
              <i className="fa fa-gears"></i>
              <h2>Software Engineer</h2>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="divider-wrapper divider-two">
              <i className="fa fa-laptop"></i>
              <h2>Full-Stack Web Developer</h2>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="divider-wrapper divider-three">
              <img src="/static/img/react.png" />
              <h2>React JS enthusiast</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
	</Layout>
);