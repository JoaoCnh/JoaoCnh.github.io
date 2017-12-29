import React, { Fragment } from "react";
import styled from "styled-components";
import Media from "react-media";
import ProgressiveImage from "react-progressive-bg-image";

import Centered from "../../common/flex/Centered";
import MaxWidth from "../../common/flex/MaxWidth";
import { Heading, SubHeading } from "../../common/Headings";
import Link from "../../common/links/Link";
import SocialNetworks from "./SocialNetworks";
import Favorites from "./Favorites";

import meImg from "../../../../public/img/me.jpg";
import meSmallImg from "../../../../public/img/mesmall.jpg";

import media from "../../../utils/media";

const Text = styled.span`
  color: ${({ textColor }) => textColor()};
  text-shadow: 0 0 50px ${({ textColor }) => textColor.clearer(0.6)};
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  ${!media.phone`margin-right: 2rem;`};
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  position: relative;
  ${!media.phone`margin-right: 2rem;`};
  padding: 0 2rem;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledProgressiveImage = styled(ProgressiveImage)`
  height: 500px;
  background-size: contain;
  background-position: center center;
`;

export default ({ page }) => {
  return (
    <Centered horizontal>
      <MaxWidth width={1280}>
        <Row>
          <Column>
            <Heading headingColor={page.color}>
              Hello! My name is João Cunha
            </Heading>
            <SubHeading>
              I'm a Full-Stack developer working{" "}
              <Link
                linkColor={page.color}
                href="https://www.wiremaze.com/"
                target="_blank"
              >
                @Wiremaze
              </Link>{" "}
              in Porto, Portugal.
            </SubHeading>
            <SubHeading>
              I love <Text textColor={page.color}>Music</Text>,{" "}
              <Text textColor={page.color}>Movies</Text>,{" "}
              <Text textColor={page.color}>Sports</Text>,{" "}
              <Text textColor={page.color}>Video-Games</Text> and{" "}
              <Text textColor={page.color}>Programming</Text>.
            </SubHeading>
          </Column>
        </Row>

        <Media query="(min-width: 1280px)">
          <Row>
            <Column>
              <Heading headingColor={page.color}>
                <StyledProgressiveImage
                  src={meImg}
                  placeholder={meSmallImg}
                  transition="all 1s linear"
                />
              </Heading>
            </Column>
          </Row>
        </Media>

        <Row>
          <Column>
            <Heading headingColor={page.color}>Welcome to my page</Heading>
            <SubHeading>
              I hope you enjoy your stay and please feel free to get to know me
              more and connect with me in the following social networks
            </SubHeading>
            <SubHeading>
              Since a child I've been crazy about computers. Everything about
              them intrigued me! At first I was only obsessed with video-games
              but soon my world would be changed by discovering Programming in
              high-school.
            </SubHeading>
            <SubHeading>
              The turning point was that first "Hello World" program using
              Pascal that triggered my passion for programming! I decided I
              wanted to make a carreer out of it and here I am today, still
              loving the coding life and I don't see myself ever getting tired
              of it.
            </SubHeading>
          </Column>
        </Row>

        <Favorites page={page} />
        <SocialNetworks />
      </MaxWidth>
    </Centered>
  );
};
