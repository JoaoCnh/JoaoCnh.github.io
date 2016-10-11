import React from 'react';

import Header from './Header.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="jmc-main">
        <Header />
      </div>
    );
  }
}

export default Main;
