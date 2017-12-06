import React from "react";
import styled from "styled-components";
import MdLink from "react-icons/lib/md/link";

const Link = styled.a`
  color: ${({ linkColor }) => linkColor()};
  text-shadow: 0 0 50px ${({ linkColor }) => linkColor.clearer(0.6)};
  text-decoration: none;
`;

export default Link;
export const LinkIcon = styled(MdLink)`
  margin-right: 5px;
`;
