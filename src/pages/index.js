import React from "react";
import AboutMe from "../components/pages/AboutMe";

import { decorateSelector } from "../theme";

// images
import MuhFaceImg from "../../public/img/cubes/muhface.jpg";
import GithubImg from "../../public/img/cubes/github.png";
import CodeImg from "../../public/img/cubes/code.png";
import DesignImg from "../../public/img/cubes/design.png";

export const aboutMe = {
  name: "about-me",
  niceName: "About me",
  Icon: MuhFaceImg,
  color: decorateSelector(() => "#6CAEDD"),
  render: page => <AboutMe page={page} />
};

export const myProjects = {
  name: "my-projects",
  niceName: "My projects",
  Icon: GithubImg,
  color: decorateSelector(() => "#F9FBFF"),
  render: page => <AboutMe page={page} />
};

export const MyExperience = {
  name: "my-experience",
  niceName: "My experience",
  Icon: CodeImg,
  color: decorateSelector(() => "#41B883"),
  render: page => <AboutMe page={page} />
};

export const whateverMe = {
  name: "this-design",
  niceName: "This design",
  Icon: DesignImg,
  color: decorateSelector(() => "#FF9800"),
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
    case MyExperience.name:
      return MyExperience;
    case whateverMe.name:
      return whateverMe;
  }
}
