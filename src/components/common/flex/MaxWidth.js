import React from "react";
import styled from "styled-components";

import media from "../../../utils/media";

const Container = styled.div`
  display: flex;
  padding: 0 2rem;
  ${media.phone`padding: 0 !important;`};
  ${media.tablet`padding: 0 !important;`};
  width: 100%;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: ${props => props.width}px;
`;

export default ({ children, width = 1280, className }) => (
  <Container>
    <InnerContainer className={className} width={width}>
      {children}
    </InnerContainer>
  </Container>
);
