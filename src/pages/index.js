import React from "react";
import MdFingerprint from "react-icons/lib/md/fingerprint";
import FaGithub from "react-icons/lib/fa/github";
import FaCode from "react-icons/lib/fa/code";
import FaHtml5 from "react-icons/lib/fa/html5";

import AboutMe from "../components/pages/AboutMe";
import MyProjects from "../components/pages/MyProjects";
import MyExperience from "../components/pages/MyExperience";
import ThisDesign from "../components/pages/ThisDesign";

import { decorateSelector } from "../theme";

export const aboutMe = {
  name: "about-me",
  niceName: "About me",
  Icon: <MdFingerprint />,
  color: decorateSelector(() => "#6CAEDD"),
  render: page => <AboutMe page={page} />
};

export const myProjects = {
  name: "my-projects",
  niceName: "My projects",
  Icon: <FaGithub />,
  inverse: true,
  color: decorateSelector(() => "#F9FBFF"),
  render: page => <MyProjects page={page} />
};

export const myExperience = {
  name: "my-experience",
  niceName: "My experience",
  Icon: <FaCode />,
  color: decorateSelector(() => "#41B883"),
  render: page => <MyExperience page={page} />
};

export const thisDesign = {
  name: "this-design",
  niceName: "This design",
  Icon: <FaHtml5 />,
  color: decorateSelector(() => "#FF9800"),
  render: page => <ThisDesign page={page} />
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
    case myExperience.name:
      return myExperience;
    case thisDesign.name:
      return thisDesign;
  }
}
