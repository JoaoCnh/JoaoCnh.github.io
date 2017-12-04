import React from "react";
import styled from "styled-components";
import { TimelineMax, TweenMax, Power2, Power3, Elastic } from "gsap";

import Cube from "./Cube";

import fadeIn from "../utils/animations";
import media from "../utils/media";
import getScrollPos from "../utils/scroll";

const RADIUS = 250;

const Container = styled.div`
  flex: 2;
  position: relative;
  transform: translateX(${RADIUS}px) translateY(125px);
  ${fadeIn(0)};
  ${media.tablet`
  flex: 2;
  width: 100%;
  transform: translateX(${RADIUS}px) translateY(400px);
  justify-content: center;
  align-items: center;
`};
`;

const SmallCube = styled(
  class SmallCubeInner extends React.Component {
    shouldComponentUpdate() {
      return false;
    }

    render() {
      const { cubeRef, ...props } = this.props;
      return (
        <div style={{ willChange: "transform" }} ref={cubeRef} {...props} />
      );
    }
  }
)`
  position: absolute;
  cursor: pointer;
  transform: scale(0.4, 0.4);
  will-change: transform;
`;

const OFFSETS = [84, 32, 54, 110];

// eslint-disable-next-line react/no-multi-comp
export default class Cubes extends React.PureComponent {
  els = {};

  constructor(props) {
    super(props);

    this.state = {
      pages: props.pages.map((page, i) => {
        const angle = Math.PI * 2 / props.pages.length * i;
        const x = RADIUS * Math.cos(angle);
        const y = RADIUS * Math.sin(angle);

        return {
          page,
          x,
          y,
          offset: OFFSETS[i]
        };
      }),
      canvas: null
    };
  }

  animate = () => {
    const delta = Date.now() - this.lastTick;

    if (delta < 0.3) {
      requestAnimationFrame(this.animate);
      return;
    }

    this.lastTick = Date.now();
    this.time = this.time + delta / 16000;

    this.state.pages.forEach((page, i) => {
      if (page.page === this.props.page) {
        return;
      }

      const angle = Math.PI * 2 / this.state.pages.length * i + this.time;
      const x = RADIUS * Math.cos(angle);
      const y = RADIUS * Math.sin(angle);

      const isLastPage = this.state.lastPage === page;

      TweenMax.to(this.els[page.page.name], isLastPage ? 0.8 : 0.3, {
        left: x,
        bottom: y
      });
    });

    requestAnimationFrame(this.animate);
  };

  componentDidMount() {
    requestAnimationFrame(() => {
      this.growCube(this.props.page, this.props.canvas).add(
        this.updateCubePos,
        "-=.7"
      );
    });

    this.lastTick = Date.now();
    this.time = 0;

    this.animating = false && window.innerWidth > 1600;

    if (this.animating) {
      this.animate();
    }
  }

  updateCubePos = () => {
    if (this.props.canvas) {
      const pos = this.els[this.props.page.name].getBoundingClientRect();
      this.props.canvas.setCubePos(pos.x + 50, pos.y + 70 + getScrollPos().y);
    }
  };

  componentWillReceiveProps(nextProps) {
    const nextPage = nextProps.page;
    const { pages } = this.state;
    const currentPage = pages[pages.map(p => p.page).indexOf(this.props.page)];

    if (nextPage !== currentPage.page) {
      this.shrinkCube(currentPage);
      this.growCube(nextPage, nextProps.canvas);
    }
  }

  growTimelines = {};
  shrinkTimelines = {};

  growCube = (page, canvas) => {
    const el = this.els[page.name];
    const rgb = page.color
      .lighten(0)()
      .match(/rgb\((.*)\)/)[1]
      .split(",");
    const { x, y } = this.state.pages[
      this.state.pages.map(({ page }) => page).indexOf(page)
    ];

    this.growTimelines[page.name] =
      this.growTimelines[page.name] ||
      new TimelineMax({ paused: true })
        .to(el, 0.8, { x: -x, y, ease: Power3.easeIn })
        .to(el, 0.7, {
          scale: 1,
          ease: Elastic.easeOut
        })
        .add(() => {
          if (canvas) {
            canvas.makeWave(canvas.cubeX, canvas.cubeY, rgb);
          }
        }, "-=.8");

    return this.growTimelines[page.name].restart();
  };

  shrinkCube = page => {
    const el = this.els[page.page.name];

    if (this.animating) {
      new TimelineMax().to(el, 0.7, { scale: 0.4, ease: Power2.easeOut });
    } else {
      this.shrinkTimelines[page.page.name] =
        this.shrinkTimelines[page.page.name] ||
        new TimelineMax()
          .to(el, 0.8, { x: 0, y: 0 })
          .to(el, 0.7, { scale: 0.4, ease: Power2.easeOut }, "-=0.7");

      return this.shrinkTimelines[page.page.name].restart();
    }
  };

  hoverCube = page => {
    const el = this.els[page.page.name];

    if (page.page === this.props.page) {
      return;
    }

    TweenMax.to(el, 0.3, {
      scale: 0.5
    });
  };

  unhoverCube = page => {
    const el = this.els[page.page.name];

    if (page.page === this.props.page) {
      return;
    }

    TweenMax.to(el, 0.3, {
      scale: 0.4
    });
  };

  render() {
    const { page } = this.props;

    if (typeof window === "undefined") {
      return null;
    }

    return (
      <Container>
        {this.state.pages.map((page, i) => {
          const selected = page === page.page;

          return (
            <SmallCube
              cubeRef={el => {
                this.els[page.page.name] = el;
              }}
              style={{ bottom: page.y, left: page.x }}
              key={page.page.name}
              selected={selected}
              i={i}
              onMouseEnter={() => this.hoverCube(page)}
              onMouseLeave={() => this.unhoverCube(page)}
              onClick={() => this.props.setPage(page.page)}
            >
              <Cube
                image={page.page.Icon}
                color={page.page.color}
                offset={page.offset}
                speed={120}
                size={170}
              />
            </SmallCube>
          );
        })}
      </Container>
    );
  }
}
