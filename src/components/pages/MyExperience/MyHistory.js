import React from "react";
import styled from "styled-components";
import FaGraduationCap from "react-icons/lib/fa/graduation-cap";
import FaBriefcase from "react-icons/lib/fa/briefcase";

import Centered from "../../common/flex/Centered";

import theme from "../../../theme";
import media from "../../../utils/media";

/**
|--------------------------------------------------
| I KNOW THE HISTORY NAME IS DUMB. YOLO
|--------------------------------------------------
*/

const Container = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const History = ({
  pageColor,
  right,
  title,
  Icon,
  children,
  iconSize = 42
}) => (
  <section>
    <HistoryContainer pageColor={pageColor} right={right} iconSize={iconSize}>
      <Icon />
      <div>
        <HistoryHeading pageColor={pageColor}>{title}</HistoryHeading>
        <HistoryDescription pageColor={pageColor}>
          {children}
        </HistoryDescription>
      </div>
    </HistoryContainer>
  </section>
);

const HistoryContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;

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
  }
`;

const HistoryHeading = styled.h4`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 1px 0px ${({ pageColor }) => pageColor.clearer(0.9)};
`;

const HistoryDescription = styled.p`
  color: white;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.4;
  text-shadow: 0 1px 0px ${({ pageColor }) => pageColor.clearer(0.9)};
`;

const Link = styled.a`
  color: white;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    color: ${({ pageColor }) => pageColor.lighten(0.2)()};
  }
`;

export default ({ page }) => {
  return (
    <Container>
      <History
        pageColor={page.color}
        Icon={FaBriefcase}
        title="Started working at Wiremaze SA - 2014 to present"
      >
        Right after college I decided to throw myself straight into the work
        environment and start learning as much as I could. So far it's been
        amazing full of learning, knowledge and great people and friends.
        <br />
        <Link
          href="https://www.wiremaze.com/"
          pageColor={page.color}
          target="_blank"
        >
          @Wiremaze
        </Link>
      </History>
      <History
        pageColor={page.color}
        Icon={FaGraduationCap}
        title="Software Engineering Degree - ISEP - 2011 to 2014"
      >
        Started my university degree (Software Engineering) in 2011 and
        completed it in 3 years.
        <br />
        <Link
          href="https://www.isep.ipp.pt/"
          pageColor={page.color}
          target="_blank"
        >
          @ISEP
        </Link>
      </History>
    </Container>
  );
};
