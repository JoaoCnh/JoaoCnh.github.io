import React from "react";
import styled from "styled-components";
import Media from "react-media";

import Cubes from "./Cubes";
import HomeTitle from "./HomeTitle";
import Background from "./Background";

import Relative from "./common/Relative";
import Fullscreen from "./common/Fullscreen";
import Centered from "./common/Centered";
import MaxWidth from "./common/MaxWidth";

import * as pages from "../pages";
import getScrollPos from "../utils/scroll";
import media from "../utils/media";
import theme from "../theme";

const Container = Centered.extend`
  position: relative;
  width: 100%;
  height: 100vh;
  flex: auto;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1280px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  ${media.tablet`
  display: block;
  flex-direction: column;
  margin-top: 6rem;
  margin-bottom: 8rem;
  height: initial;
  `};
`;

export default class Animation extends React.PureComponent {
  state = {
    pages: Object.keys(pages)
      .filter(k => k !== "default" && k !== "__esModule")
      .map(page => pages[page])
      .filter(page => page.Icon),
    pageIndex: 0,
    pageSelected: false,
    canvas: undefined
  };

  startTimer = () => {
    this.timeout = setTimeout(() => {
      if (!this.state.pageSelected) {
        if (!window.scrolling && getScrollPos().y < window.innerHeight) {
          this.setState({
            pageIndex: (this.state.pageIndex + 1) % this.state.pages.length
          });
        }

        this.startTimer();
      }
    }, 6000);
  };

  setCanvas = canvas => {
    this.setState({ canvas });
  };

  selectPage = page => {
    this.setState({
      pageIndex: this.state.pages.indexOf(page),
      pageSelected: true
    });
  };

  componentDidMount() {
    // this.startTimer();
  }

  componentWillUnmount() {
    // clearTimeout(this.timeout);
  }

  render() {
    const page = this.state.pages[this.state.pageIndex];

    return (
      <Relative>
        <Fullscreen>
          <Background
            pageIndex={this.state.pageIndex}
            page={page}
            setCanvas={this.setCanvas}
          />
          <Container horizontal>
            <HomeTitle page={page} />
            <Media query="(min-width: 1280px)">
              <Cubes
                canvas={this.state.canvas}
                pages={this.state.pages}
                page={page}
                setPage={this.selectPage}
              />
            </Media>
          </Container>
        </Fullscreen>
        <MaxWidth width={1280}>{page.render(page)}</MaxWidth>
      </Relative>
    );
  }
}
