import React from "react";

import MaxWidth from "../../common/flex/MaxWidth";
import Centered from "../../common/flex/Centered";
import { Heading, SubHeading } from "../../common/Headings";

import MySkills from "./MySkills";

export default class MyExperience extends React.PureComponent {
  render() {
    const { page } = this.props;

    return (
      <Centered horizontal>
        <MaxWidth width={1280}>
          <Heading color={page.color}>This is what I can handle</Heading>
          <SubHeading>
            From 0 (know very little) to 10 (I'M A GOD! I KNOW EVERYTHING!)
          </SubHeading>

          <MySkills page={page} />

          <Heading color={page.color}>These are my posts on Medium</Heading>
          <SubHeading>
            I try to write about projects that I work on or even topics related
            to programming in general that come to my mind.
          </SubHeading>
          <SubHeading>
            Don't have a schedule for posting so please feel free to follow to
            be up to date.
          </SubHeading>
        </MaxWidth>
      </Centered>
    );
  }
}
