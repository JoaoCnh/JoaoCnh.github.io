import React from "react";
import styled, { css } from "styled-components";

import MaxWidth from "../../common/flex/MaxWidth";
import Centered from "../../common/flex/Centered";
import Column from "../../common/flex/Column";
import Padding from "../../common/spacing/Padding";
import RollingText from "../../common/RollingText";
import Link, { LinkIcon } from "../../common/links/Link";

import theme from "../../../theme";
import media from "../../../utils/media";
import { icons } from "./icons";

const Container = styled.div`
  transition: 0.3s ease box-shadow;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0 3px 200px ${({ containerColor }) => containerColor.clearer(0.8)};
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 15px;
  ${media.tablet`
  margin-top: 1rem;
  height: 320px;
`};
  ${media.phone`
  margin-top: 1rem;
  height: 280px;
`};
`;

const Pane = styled(MaxWidth)`
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.4;
  border-radius: 4px;
  margin-top: 4rem;
  margin-bottom: 8rem;
  z-index: 2;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${media.phone`
  flex-direction: column;
`};
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  margin-bottom: 4rem;
  flex: 1;
  min-width: 100%;
  ${media.phone`
  margin: 2rem 0;
`};
`;

const IconContainer = styled.div`
  transition: 0.3s ease background-color;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 128px;
  height: 128px;

  svg {
    width: 80px;
    height: 80px;
  }

  ${media.phone`
    width: 96px;
    height: 96px;
    svg {
      width: 60px;
      height: 60px;
    }
  `};

  border-radius: 2px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  ${({ selected, template }) =>
    selected &&
    css`
      background-color: ${template.color.clearer(0.9)};
      &:hover {
        background-color: ${template.color.clearer(0.9)};
      }
    `};
`;

const TemplateName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 2px;
  color: white;

  img {
    display: block;
  }

  h4 {
    margin-bottom: 0;
    margin-top: 1rem;
    font-weight: 200;
    font-size: 2rem;
  }
`;

export default class SocialNetworks extends React.Component {
  state = { socialIndex: 0 };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.socialIndex !== this.state.socialIndex;
  }

  setSocialNet = socialIndex => {
    this.setState({ socialIndex });
  };

  render() {
    const network = icons[this.state.socialIndex];

    return (
      <Pane width={1280}>
        <Flex>
          <Icons>
            {icons.map(({ Icon }, i) => (
              <IconContainer
                key={i}
                selected={i === this.state.socialIndex}
                template={network}
                onClick={() => {
                  this.setSocialNet(i);
                }}
              >
                {Icon}
              </IconContainer>
            ))}
          </Icons>
          <Container containerColor={network.color}>
            <Centered horizontal>
              <RollingText
                style={{
                  display: "flex",
                  height: "100%",
                  alignItems: "center"
                }}
                updateCheck={network}
              >
                <Link
                  linkColor={network.color}
                  href={network.link}
                  target="_blank"
                >
                  <LinkIcon />
                  {network.value}
                </Link>
              </RollingText>
            </Centered>
          </Container>
        </Flex>
      </Pane>
    );
  }
}
