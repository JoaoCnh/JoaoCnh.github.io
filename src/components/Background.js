import React from "react";
import styled from "styled-components";

import setupCanvas from "../utils/canvas";
import fadeIn from "../utils/animations";

const delay = fadeIn(0);

const Container = styled.div`
  transition: 0.8s ease background-color;
  transition-delay: 1s;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  pointer-events: none;
  ${delay};
`;

export default class Background extends React.PureComponent {
  startCanvas = el => {
    this.canvas = setupCanvas(el);

    this.props.setCanvas(this.canvas);
  };

  // Use solid colors for perf
  colors = {
    "about-me": "#1E2428",
    "my-projects": "#3E3F40",
    "my-experience": "#1D2525",
    "this-design": "#261700"
  };

  render() {
    const { page } = this.props;

    return (
      <Container
        style={{
          backgroundColor: this.colors[page.name] || page.color.clearer(0.97)()
        }}
      >
        <canvas
          style={{
            position: "absolute",
            top: 0,
            left: 0
          }}
          ref={this.startCanvas}
        />
      </Container>
    );
  }
}
