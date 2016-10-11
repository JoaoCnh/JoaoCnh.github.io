import React from 'react';

import Main   from './common/Main.js';
import Loader from './common/Loader.js';

let intro_phrases = [
  "I love programming",
  "It's not a bug... It's an undocumented feature",
  "Coffee is my coding fuel",
  "In order to understand recursion, one must first understand recursion.",
];

export default React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      loadingPhrase: intro_phrases[Math.floor(Math.random()*intro_phrases.length)],
      doneLoading: false,
    };
  },
  hideLoader: function () {
    this.setState({
      isLoading: false,
      doneLoading: true,
    });
  },
  render: function() {
    return (
      <div>
        <Loader isLoading={this.state.isLoading} loadingPhrase={this.state.loadingPhrase}
          doneLoading={this.state.doneLoading} hideLoader={this.hideLoader} />
        <Main />
      </div>
    );
  }
});
