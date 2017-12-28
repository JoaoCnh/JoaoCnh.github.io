import React from "react";
import styled from "styled-components";
import FaCircleONotch from "react-icons/lib/fa/circle-o-notch";

import ErrorBoundary from "../../errors/ErrorBoundary";
import Background from "../../common/Background";
import MaxWidth from "../../common/flex/MaxWidth";
import Centered from "../../common/flex/Centered";
import Project from "./Project";

import media from "../../../utils/media";

const Heading = styled.h2`
  text-align: center;
  font-weight: 200;
  font-size: 2.5rem;
  margin-top: 6rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: white;
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

export default class MyProjects extends React.Component {
  state = {
    init: true,
    loading: false,
    projects: []
  };

  fetchProjects = async () => {
    const res = await fetch("https://api.github.com/users/JoaoCnh/repos");
    const json = await res.json();

    this.setState({ loading: false, projects: json });
  };

  componentDidMount() {
    this.setState({ init: false, loading: true }, this.fetchProjects);
  }

  render() {
    const { page } = this.props;
    const { init, loading, projects } = this.state;

    if (init) {
      return <div />;
    }

    return (
      <ErrorBoundary type="github">
        <Centered horizontal>
          <MaxWidth width={1280}>
            <Centered horizontal>
              <Heading>These are my OSS projects on Github</Heading>
              {loading && <Loader />}
            </Centered>
            {projects.length > 0 && (
              <Projects>
                {projects.map(project => (
                  <Project key={project.id} project={project} />
                ))}
              </Projects>
            )}
          </MaxWidth>
        </Centered>
      </ErrorBoundary>
    );
  }
}
