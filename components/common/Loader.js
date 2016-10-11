import React from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from 'react-progress-bar-plus';

class Loader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.doneLoading) {
      setTimeout(function () {
        let loaderDOMNode = ReactDOM.findDOMNode(this);

        loaderDOMNode.style.transition = "opacity 250ms";
        loaderDOMNode.style.opacity = 0;

        // smooth animation delaying the display none
        setTimeout(function () {
          loaderDOMNode.style.display = 'none';
        }, 500);

        this.props.hideLoader();
      }.bind(this), 2000);
    }

    return (
      <div id="jmc-page-loading">
        <ProgressBar percent={!this.props.isLoading && this.props.doneLoading ? 100 : 25}
            autoIncrement={true}
            intervalTime={50}
            spinner="left"
            className="jmc-loading-bar" />
        <div className="jmc-loading-table">
          <div className="jmc-loading-cell">
            <div className="jmc-loading-pulse">
              <span>{"\{"}</span><span>{"\}"}</span>
            </div>
            <div className="jmc-loading-text">
              João Cunha
            </div>
            <div className="jmc-loading-sub-text">
              {this.props.loadingPhrase}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;
