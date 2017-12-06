import React from "react";
import styled from "styled-components";

import media from "../../utils/media";

const Heading = styled.h2`
  text-align: center;
  font-weight: 300;
  font-size: 2.5rem;
  margin-top: 6rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  ${media.phone`
margin-top: 3rem;
margin-bottom: 0;
`};
  color: ${({ headingColor }) => headingColor()};
  text-shadow: 0 0 50px ${({ headingColor }) => headingColor.clearer(0.6)};
`;

const SubHeading = styled.p`
  font-size: 1.25rem;
  text-align: center;
  font-weight: 200;
  line-height: 1.4;
  max-width: 100rem;
  color: rgba(255, 255, 255, 0.8);
`;

export { Heading, SubHeading };
