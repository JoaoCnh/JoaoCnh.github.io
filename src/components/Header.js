import { Component } from 'react';
import { Motion, spring } from 'react-motion';
import Link from 'next/link';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  _toggleMenu() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const collapseCss = this.state.isOpen ? '' : 'collapse';
    const motionStyle = { 
      height: this.state.isOpen ? spring(200) : spring(1),
    };

    return (
      <div className="container">
        <div className="navbar navbar-default navbar-static-top" role="navigation">
          <div className="navbar-header">
            <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"
              onClick={this._toggleMenu.bind(this)}>
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
            </button>
            <a href="#" className="navbar-brand">
              João Cunha
            </a>
          </div>
          <Motion style={motionStyle}>
          {motionStyle => 
            <div className={`navbar-collapse ${collapseCss}`} style={motionStyle}>
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
          }
          </Motion>
        </div>
      </div>
    );
  }
}