import React, { Fragment } from "react";
import styled from "styled-components";
import Media from "react-media";
import ProgressiveImage from "react-progressive-bg-image";

import SocialNetworks from "./SocialNetworks";
import Centered from "../../common/flex/Centered";
import MaxWidth from "../../common/flex/MaxWidth";
import { Heading, SubHeading } from "../../common/Headings";
import Link from "../../common/links/Link";

import meImg from "../../../../public/img/me.jpg";
import meSmallImg from "../../../../public/img/mesmall.jpg";

const Text = styled.span`
  color: ${({ color }) => color()};
  text-shadow: 0 0 50px ${({ color }) => color.clearer(0.6)};
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  margin-right: 2rem;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  position: relative;
  margin-right: 2rem;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ColumnHeading = styled.h3`
  color: ${({ color }) => color()};
  text-shadow: 0 0 50px ${({ color }) => color.clearer(0.6)};
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.0875rem;
  text-rendering: optimizeLegibility;
  font-size: 2.35824rem;
  line-height: 1.1;
`;

const ColumnSubHeading = styled.p`
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.0875rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.8rem;
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
        <Heading color={page.color}>Hello! My name is João Cunha</Heading>
        <SubHeading>
          I'm a Full-Stack developer working{" "}
          <Link
            color={page.color}
            href="https://www.wiremaze.com/"
            target="_blank"
          >
            @Wiremaze
          </Link>{" "}
          in Porto, Portugal.
          <br />
          I love <Text color={page.color}>Music</Text>,{" "}
          <Text color={page.color}>Movies</Text>,{" "}
          <Text color={page.color}>Sports</Text>,{" "}
          <Text color={page.color}>Video-Games</Text> and{" "}
          <Text color={page.color}>Programming</Text>.
        </SubHeading>

        <Media query="(min-width: 1280px)">
          <Row>
            <Column>
              <ColumnHeading color={page.color}>
                <StyledProgressiveImage
                  src={meImg}
                  placeholder={meSmallImg}
                  transition="all 1s linear"
                />
              </ColumnHeading>
            </Column>
            <Column>
              <ColumnHeading color={page.color}>
                Welcome to my page
              </ColumnHeading>
              <ColumnSubHeading>
                I hope you enjoy your stay and please feel free to get to know
                me more and connect with me in the following social networks
              </ColumnSubHeading>
              <ColumnSubHeading>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ColumnSubHeading>
            </Column>
          </Row>
        </Media>

        <Media query="(max-width: 1280px)">
          <Fragment>
            <Row>
              <ColumnHeading color={page.color}>
                <StyledProgressiveImage
                  src={meImg}
                  placeholder={meSmallImg}
                  transition="all 1s linear"
                />
              </ColumnHeading>
            </Row>
            <Row>
              <ColumnHeading color={page.color}>
                Welcome to my page
              </ColumnHeading>
              <ColumnSubHeading>
                I hope you enjoy your stay and please feel free to get to know
                me more and connect with me in the following social networks
              </ColumnSubHeading>
              <ColumnSubHeading>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ColumnSubHeading>
            </Row>
          </Fragment>
        </Media>

        <SocialNetworks />
      </MaxWidth>
    </Centered>
  );
};
