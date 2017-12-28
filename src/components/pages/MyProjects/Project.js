import React from "react";
import styled from "styled-components";
import FaGithub from "react-icons/lib/fa/github";
import FaCodeFork from "react-icons/lib/fa/code-fork";
import FaStarO from "react-icons/lib/fa/star-o";

// I should really put this in a provider but I'm lazy af
import theme from "../../../theme";
import media from "../../../utils/media";
import { langIcon } from "../../../utils/lang";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  text-align: center;
  color: #1c2022;
  margin: 0.5rem;
  width: calc(25% - 2rem);
  -moz-box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  background-color: white;

  ${media.tablet`
  width: calc(50% - 2rem);
`};
  ${media.phone`
  width: 100%;
`};

  svg {
    font-size: 2rem;
    color: #1c2022;
    font-weight: 400;
    line-height: 1.4;
    text-shadow: 0 1px 0px rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.a`
  font-size: 1.125rem;
  margin: 0.5rem 0;
  text-decoration: none;
  color: ${props => props.theme.secondary};
`;

const Description = styled.div`
  color: #1c2022;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4;
  text-shadow: 0 1px 0px rgba(0, 0, 0, 0.3);
  max-width: 100%; /* IE11 */
`;

const Lang = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

const Stars = styled.div`
  display: block;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;

  svg {
    fill: #ffeb3b;
  }
`;

export default ({ project }) => {
  return (
    <Container>
      {project.fork ? <FaCodeFork /> : <FaGithub />}
      <Title href={project.html_url} target="_blank" theme={theme}>
        {project.name}
      </Title>
      <Lang>{langIcon(project.language)}</Lang>
      {parseInt(project.stargazers_count) > 0 && (
        <Stars>
          <FaStarO />
          {project.stargazers_count}
        </Stars>
      )}
      <Description theme={theme}>{project.description}</Description>
    </Container>
  );
};
