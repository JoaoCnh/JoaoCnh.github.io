import React from "react";
import styled from "styled-components";

import MaxWidth from "../../common/flex/MaxWidth";
import Node from "../../common/langs/Node";
import VSCode from "../../common/tools/VSCode";
import Javascript from "../../common/langs/Javascript";
import { default as ReactIcon } from "../../common/langs/React";

import theme from "../../../theme";
import media from "../../../utils/media";

const Favorites = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  text-align: center;
  margin: 0.5rem;
  width: calc(25% - 2rem);
  -moz-box-shadow: 0 3px 100px ${({ favColor }) => favColor.clearer(0.2)};
  -webkit-box-shadow: 0 3px 100px ${({ favColor }) => favColor.clearer(0.2)};
  box-shadow: 0 3px 100px ${({ favColor }) => favColor.clearer(0.2)};
  padding: 0.5rem;

  ${media.tablet`width: calc(50% - 2rem);`};
  ${media.phone`width: 100%;`};

  svg {
    font-size: 2rem;
    fill: ${props => props.theme.secondary};
    font-weight: 400;
    line-height: 1.4;
    text-shadow: 0 1px 0px rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.a`
  font-size: 1.125rem;
  margin: 0.5rem 0;
  text-decoration: none;
  color: ${props => props.theme.secondary};
`;

const Name = styled.span`
  font-size: 1.125rem;
  margin: 0.5rem 0;
  color: white;
`;

export default ({ page }) => {
  return (
    <MaxWidth width={1280}>
      <Favorites>
        <Container favColor={page.color} theme={theme}>
          <Title
            href="https://code.visualstudio.com/"
            target="_blank"
            theme={theme}
          >
            Favorite Editor
          </Title>
          <VSCode />
          <Name>Visual Studio Code</Name>
        </Container>

        <Container favColor={page.color} theme={theme}>
          <Title
            href="https://www.javascript.com/"
            target="_blank"
            theme={theme}
          >
            Favorite Programming Language
          </Title>
          <Javascript />
          <Name>Javascript</Name>
        </Container>

        <Container favColor={page.color} theme={theme}>
          <Title href="https://reactjs.org/" target="_blank" theme={theme}>
            Favorite frontend lib / framework
          </Title>
          <ReactIcon />
          <Name>React</Name>
        </Container>

        <Container favColor={page.color} theme={theme}>
          <Title href="https://nodejs.org/en/" target="_blank" theme={theme}>
            Favorite backend lib / framework
          </Title>
          <Node />
          <Name>Node JS</Name>
        </Container>
      </Favorites>
    </MaxWidth>
  );
};
