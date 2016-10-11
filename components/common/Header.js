import React from 'react';

import Header from './Header.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header id="jmc-header">
        <a id="jmc-down-arrow" href="#">
          <i className="fa fa-arrow-circle-o-down"></i>
        </a>
        <div className="jmc-intro">
            <div className="jmc-mobile-logo">
                <img src="images/jj.png" width="300" height="300" alt="" />
            </div>
            <ul className="jmc-header-icons">
                <li className="jmc-logo">
                    <img src="images/jj.png" width="300" height="300" alt="" />
                </li>
                <li className="jmc-social">
                    <a href="https://www.facebook.com/joao.m.cunha.56" className="fa fa-facebook-f" target="_blank">
                      Facebook
                    </a>
                </li>
                <li className="jmc-social">
                    <a href="https://www.instagram.com/joaomiguelcunha45" className="fa fa-instagram" target="_blank">
                      Instagram
                    </a>
                </li>
                <li className="jmc-social">
                    <a href="https://github.com/JoaoCnh" className="fa fa-github" target="_blank">
                      GitHub
                    </a>
                </li>
                <li className="jmc-social">
                    <a href="https://www.linkedin.com/in/joao-cunha-6a98a29b" className="fa fa-linkedin" target="_blank">
                      LinkedIn
                    </a>
                </li>
                <li className="jmc-social">
                    <a href="http://stackoverflow.com/users/3154167/lokuzt" className="fa fa-stack-overflow" target="_blank">
                      Stack Overflow
                    </a>
                </li>
            </ul>
            <h1>Joao Cunha</h1>
            <p className="jmc-subtitle">WORK IN PROGRESS</p>
        </div>
      </header>
    );
  }
}

export default Main;
