import React from "react";
import AboutMe from "../components/pages/AboutMe";

import { decorateSelector } from "../theme";

// images
import MuhFaceImg from "../../public/muhface.jpg";
import GithubImg from "../../public/github.png";

export const aboutMe = {
  name: "about-me",
  niceName: "About Me",
  Icon: MuhFaceImg,
  color: decorateSelector(() => "#6CAEDD"),
  render: page => <AboutMe page={page} />
};

export const myProjects = {
  name: "my-projects",
  niceName: "My Projects",
  Icon: GithubImg,
  color: decorateSelector(() => "#F9FBFF"),
  render: page => <AboutMe page={page} />
};

export const whereToFindMe = {
  name: "where-to-find-me",
  niceName: "Where to find me",
  Icon: MuhFaceImg,
  color: decorateSelector(() => "#AD78DC"),
  render: page => <AboutMe page={page} />
};

export const whateverMe = {
  name: "whatever-me",
  niceName: "Whatever Me",
  Icon: MuhFaceImg,
  color: decorateSelector(() => "#AA1E1E"),
  render: page => <AboutMe page={page} />
};

export default function getDefinition(theme) {
  if (!theme) {
    return aboutMe;
  }

  switch (theme) {
    default:
    case aboutMe.name:
      return aboutMe;
    case myProjects.name:
      return myProjects;
    case whereToFindMe.name:
      return whereToFindMe;
    case whateverMe.name:
      return whateverMe;
  }
}
