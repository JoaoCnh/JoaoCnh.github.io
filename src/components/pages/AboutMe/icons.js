import React from "react";
import styled from "styled-components";

import { fadeIn } from "../../../utils/animations";
import { decorateSelector } from "../../../theme";

// images
import linkedInSvg from "../../../../public/img/social/linkedin.svg";
import twitterSvg from "../../../../public/img/social/twitter.svg";
import githubSvg from "../../../../public/img/social/github.svg";
import soSvg from "../../../../public/img/social/so.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  ${props => fadeIn(props.i * 0.1)};
  img {
    display: inline-block;
    margin-bottom: 0;
  }
`;

export default ({ iconSrc, title, extension, ...props }) => (
  <Container {...props}>
    <img width={20} height={20} src={iconSrc} alt={title} />
    <span>.{extension}</span>
  </Container>
);

export const icons = [
  {
    Icon: linkedInSvg,
    title: "Linked In",
    value: "João Cunha",
    link: "https://www.linkedin.com/in/joao-cunha-6a98a29b/",
    color: decorateSelector(() => "#0077B5")
  },
  {
    Icon: twitterSvg,
    title: "Twitter",
    value: "@lokuzt",
    link: "https://twitter.com/lokuzt",
    color: decorateSelector(() => "#1DA1F2")
  },
  {
    Icon: githubSvg,
    title: "Github",
    value: "JoaoCnh",
    link: "https://github.com/JoaoCnh",
    color: decorateSelector(() => "#F9FBFF")
  },
  {
    Icon: soSvg,
    title: "Stack Overflow",
    value: "lokuzt",
    link: "https://stackoverflow.com/users/3154167/lokuzt",
    color: decorateSelector(() => "#F48024")
  }
];
