import React, { Fragment } from "react";
import styled from "styled-components";
import Media from "react-media";

import SocialNetworks from "./SocialNetworks";
import Centered from "../../common/flex/Centered";
import { Heading, SubHeading } from "../../common/Headings";
import Link from "../../common/links/Link";

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

export default ({ page }) => {
  return (
    <div>
      <Centered horizontal>
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
      </Centered>

      <Media query="(min-width: 1280px)">
        <Row>
          <Column>
            <ColumnHeading color={page.color}>setup img</ColumnHeading>
          </Column>
          <Column>
            <ColumnHeading color={page.color}>Welcome to my page</ColumnHeading>
            <ColumnSubHeading>
              I hope you enjoy your stay and please feel free to get to know me
              more and connect with me in the following social networks
            </ColumnSubHeading>
          </Column>
        </Row>
      </Media>

      <Media query="(max-width: 1280px)">
        <Fragment>
          <Row>
            <ColumnHeading color={page.color}>setup img</ColumnHeading>
          </Row>
          <Row>
            <ColumnHeading color={page.color}>Welcome to my page</ColumnHeading>
            <ColumnSubHeading>
              I hope you enjoy your stay and please feel free to get to know me
              more and connect with me in the following social networks
            </ColumnSubHeading>
          </Row>
        </Fragment>
      </Media>

      <SocialNetworks />
    </div>
  );
};
