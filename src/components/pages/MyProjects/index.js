import React from "react";
import styled from "styled-components";
import FaCircleONotch from "react-icons/lib/fa/circle-o-notch";
import FaGithub from "react-icons/lib/fa/github";
import FaFire from "react-icons/lib/fa/fire";

import MaxWidth from "../../common/flex/MaxWidth";
import Centered from "../../common/flex/Centered";
import Project from "./Project";

import media from "../../../utils/media";

const Background = styled.div`
  background-color: ${props => props.color()};
`;

const Heading = styled.h2`
  text-align: center;
  font-weight: 200;
  font-size: 2.5rem;
  margin-top: 6rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: #1c2022;
  text-shadow: 0 0 100px #3c4244;
  ${media.phone`margin-top: 3rem; margin-bottom: 0; `};
`;

const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 6rem;
`;

const Loader = styled(FaCircleONotch)`
  color: #1c2022;
  font-size: 2rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
  margin-right: 1rem;
  -webkit-animation: icon-spin 2s infinite linear;
  animation: icon-spin 2s infinite linear;

  @-webkit-keyframes icon-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }

  @keyframes icon-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
`;

const NotMyFaultM8 = styled.div`
  width: 100%;
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 5rem;
  border: 1px solid transparent;
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;

  h4 {
    color: inherit;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

export default class MyProjects extends React.Component {
  state = {
    init: true,
    loading: false,
    projects: [],
    error: false
  };

  fetchProjects = async () => {
    try {
      const res = await fetch("https://api.github.com/users/JoaoCnh/repos");
      const json = await res.json();

      this.setState({ error: false, loading: false, projects: json });
    } catch (error) {
      this.setState({ error: true, loading: false });
    }
  };

  componentDidMount() {
    this.setState(
      { init: false, loading: true },
      this.fetchProjects.bind(this)
    );
  }

  render() {
    const { page } = this.props;
    const { init, loading, projects, error } = this.state;

    if (init) {
      return <div />;
    }

    return (
      <Background color={page.color}>
        <MaxWidth width={1280}>
          <Centered horizontal>
            <Heading>These are my OS projects on Github</Heading>
            {loading && <Loader />}
            {error && (
              <NotMyFaultM8>
                <h4>
                  <FaFire />
                  Something at Github must be brewing
                </h4>
              </NotMyFaultM8>
            )}
          </Centered>
          {!error &&
            projects.length > 0 && (
              <Projects>
                {projects.map(project => (
                  <Project key={project.id} project={project} />
                ))}
              </Projects>
            )}
        </MaxWidth>
      </Background>
    );
  }
}
