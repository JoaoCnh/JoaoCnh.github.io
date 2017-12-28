import React from "react";
import styled from "styled-components";
import Media from "react-media";

import Cubes from "./Cubes";
import HomeTitle from "./HomeTitle";
import Button from "./common/Button";
import Background from "./Background";

import Relative from "./common/Relative";
import Fullscreen from "./common/Fullscreen";
import Centered from "./common/flex/Centered";
import MaxWidth from "./common/flex/MaxWidth";

import * as pages from "../pages";
import getScrollPos from "../utils/scroll";
import media from "../utils/media";
import theme from "../theme";
import { fadeIn } from "../utils/animations";

const Container = Centered.extend`
  position: relative;
  width: 100%;
  height: 75vh;
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

const Buttons = styled.div`
  display: flex;
  width: 550px;
  ${fadeIn(0.5)};
  font-size: 1.25rem;

  button {
    margin-right: 1rem;
    ${media.tablet`
    margin: 0;
    text-align: center;
    margin-right: 0;
  `};
  }

  ${media.tablet`
    margin: 0 1rem;
    justify-content: space-around;
    width: 100%;
    text-align: center;
  `};
  ${media.phone`
    margin: 0;
    font-size: .875rem;
    flex-wrap: wrap;
    button {
      width: inherit;
      margin-bottom: 1rem;
    }
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

  setCanvas = canvas => {
    this.setState({ canvas });
  };

  selectPage = page => {
    this.setState({
      pageIndex: this.state.pages.indexOf(page),
      pageSelected: true
    });
  };

  render() {
    const { pages, pageIndex, canvas } = this.state;
    const page = pages[pageIndex];

    return (
      <div>
        <Relative>
          <Fullscreen>
            <Background
              pageIndex={pageIndex}
              page={page}
              setCanvas={this.setCanvas}
            />
            <Container horizontal>
              <HomeTitle page={page} />
              <Media query="(min-width: 1280px)">
                <Cubes
                  canvas={canvas}
                  pages={pages}
                  page={page}
                  setPage={this.selectPage}
                />
              </Media>
              <Media query="(max-width: 1280px)">
                <Centered>
                  <MaxWidth width={1280}>
                    <Buttons>
                      {pages.map(page => (
                        <Button
                          key={`button-${page.name}`}
                          type="button"
                          onClick={this.selectPage.bind(this, page)}
                          color={page.color}
                        >
                          {page.niceName}
                        </Button>
                      ))}
                    </Buttons>
                  </MaxWidth>
                </Centered>
              </Media>
            </Container>
          </Fullscreen>
        </Relative>

        {page.render(page)}
      </div>
    );
  }
}
