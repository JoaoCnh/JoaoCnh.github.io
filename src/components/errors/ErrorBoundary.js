import React, { Fragment } from "react";
import styled from "styled-components";
import FaBug from "react-icons/lib/fa/bug";
import FaGithub from "react-icons/lib/fa/github";
import FaMedium from "react-icons/lib/fa/medium";

import Background from "../common/Background";
import MaxWidth from "../common/flex/MaxWidth";
import Centered from "../common/flex/Centered";

import { decorateSelector } from "../../theme";

const SubHeading = styled.h3`
  text-align: center;
  font-weight: 200;
  font-size: 2.5rem;
  margin-bottom: 6rem;
  text-transform: uppercase;
  color: white;
`;

const Heading = styled.h2`
  margin-top: 6rem;

  svg {
    fill: white;
  }
`;

export default class ErrorBoundary extends React.Component {
  state = { error: false };

  _renderTypeIcon = () => {
    switch (this.props.type) {
      case "medium":
        return <FaMedium width={100} height={100} />;
      case "github":
        return <FaGithub width={100} height={100} />;
      default:
        return <FaBug width={100} height={100} />;
    }
  };

  _renderType = () => {
    return (
      <Fragment>
        <Heading>{this._renderTypeIcon()}</Heading>
        <SubHeading>
          Oops! Something must have gone wrong. Please try again later
        </SubHeading>
      </Fragment>
    );
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    if (!this.state.error) {
      return this.props.children;
    }

    return (
      <Background backgroundColor={decorateSelector(() => "#F44336")}>
        <MaxWidth width={1280}>
          <Centered horizontal>{this._renderType()}</Centered>
        </MaxWidth>
      </Background>
    );
  }
}
