import React from "react";
import styled from "styled-components";
import FaMedium from "react-icons/lib/fa/medium";

import media from "../../../utils/media";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  text-align: center;
  color: white;
  margin: 0.5rem;
  width: calc(25% - 2rem);
  -moz-box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  background-color: ${({ pageColor }) => pageColor.clearer(0.9)};

  ${media.tablet`
  width: calc(50% - 2rem);
`};
  ${media.phone`
  width: 100%;
`};

  svg {
    font-size: 2rem;
    fill: ${({ pageColor }) => pageColor()};
    font-weight: 400;
    line-height: 1.4;
    text-shadow: 0 1px 0px rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.a`
  font-size: 1.125rem;
  margin: 0.5rem 0;
  text-decoration: none;
  color: white;
`;

export default ({ story, pageColor }) => {
  return (
    <Container pageColor={pageColor}>
      <FaMedium />
      <Title href={story.link} target="_blank">
        {story.title}
      </Title>
    </Container>
  );
};
