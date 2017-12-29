import React from "react";
import styled from "styled-components";
import FaGraduationCap from "react-icons/lib/fa/graduation-cap";
import FaBriefcase from "react-icons/lib/fa/briefcase";
import MdInsertLink from "react-icons/lib/md/insert-link";

import MaxWidth from "../../common/flex/MaxWidth";
import Centered from "../../common/flex/Centered";
import Button from "../../common/Button";

import theme from "../../../theme";
import media from "../../../utils/media";

/**
|--------------------------------------------------
| I KNOW THE HISTORY NAME IS DUMB. YOLO
|--------------------------------------------------
*/

const Container = styled.div`
  margin-top: 5rem;
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

const History = ({ pageColor, title, Icon, Link, children }) => (
  <section>
    <HistoryContainer pageColor={pageColor}>
      <Column>
        <Icon />

        <div>
          <HistoryHeading pageColor={pageColor}>{title}</HistoryHeading>
          <HistoryDescription pageColor={pageColor}>
            {children}
          </HistoryDescription>
        </div>

        {Link}
      </Column>
    </HistoryContainer>
  </section>
);

const HistoryContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  align-items: center;

  ${media.phone`
    text-align: left;
    flex-direction: row;

    svg {
      height: 32px;
      min-width: 32px;
    }
  `};

  svg {
    margin-right: 1rem;
    min-width: 48px;
    height: 48px;
    color: white;
    text-shadow: 0 2px 2px ${({ pageColor }) => pageColor.clearer(0.9)};
    align-self: center;
  }
`;

const HistoryHeading = styled.h4`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 1px 0px ${({ pageColor }) => pageColor.clearer(0.9)};
  text-align: center;
`;

const HistoryDescription = styled.p`
  color: white;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.4;
  text-shadow: 0 1px 0px ${({ pageColor }) => pageColor.clearer(0.9)};
  text-align: center;
`;

const Link = Button.withComponent("a").extend`
  max-width: 25%;
  text-decoration: none;
  align-self: center;
`;

export default ({ page }) => {
  return (
    <MaxWidth width={1280}>
      <Centered horizontal>
        <Container>
          <History
            pageColor={page.color}
            Icon={FaBriefcase}
            Link={
              <Link
                href="https://www.wiremaze.com/"
                buttonColor={page.color}
                target="_blank"
              >
                Wiremaze
              </Link>
            }
            title="Started working at Wiremaze SA - 2014 to present"
          >
            Right after college I decided to throw myself straight into the work
            environment and start learning as much as I could. So far it's been
            amazing full of learning, knowledge and great people and friends.
          </History>
          <History
            pageColor={page.color}
            Icon={FaGraduationCap}
            Link={
              <Link
                href="https://www.isep.ipp.pt/"
                buttonColor={page.color}
                target="_blank"
              >
                ISEP
              </Link>
            }
            title="Software Engineering Degree - ISEP - 2011 to 2014"
          >
            Started my university degree (Software Engineering) in 2011 and
            completed it in 3 years.
          </History>
        </Container>
      </Centered>
    </MaxWidth>
  );
};
