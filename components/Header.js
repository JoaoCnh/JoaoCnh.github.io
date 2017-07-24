import Link from 'next/link';

export default () => (
	<div className="container">
    <div className="navbar navbar-default navbar-static-top" role="navigation">
      <div className="navbar-header">
        <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="icon icon-bar"></span>
          <span className="icon icon-bar"></span>
          <span className="icon icon-bar"></span>
        </button>
        <a href="#" className="navbar-brand">
          João Cunha
        </a>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>ABOUT ME</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a>PORTFOLIO</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);