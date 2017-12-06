import React from "react";
import styled from "styled-components";

import media from "../../../utils/media";
import { langIcon } from "../../../utils/lang";

export const skills = [
  {
    key: "js",
    name: "Javascript",
    value: 3
  },
  {
    key: "react",
    name: "React",
    value: 3
  },
  {
    key: "css",
    name: "CSS",
    value: 1
  },
  {
    key: "sass",
    name: "Sass",
    value: 1
  },
  {
    key: "html",
    name: "Html",
    value: 5
  },
  {
    key: "gulp",
    name: "Gulp",
    value: 1
  },
  {
    key: "webpack",
    name: "Webpack",
    value: 1
  },
  {
    key: "ruby",
    name: "Ruby",
    value: 2
  },
  {
    key: "rails",
    name: "Rails",
    value: 2
  }
];

const Skills = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 3rem;

  ${media.tablet`justify-content: space-evenly;`};
`;

const SkillSection = styled.div`
  width: 100px;

  &:hover {
    cursor: pointer;
  }

  ${media.phone`margin-top: 3rem;`};
  ${media.tablet`margin-top: 3rem;`};
`;

const SkillList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const SkillBar = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding: 5px;
  background: ${({ fill, color }) => (fill ? color : `#ccc`)};
  -webkit-transition: all ${({ delay }) => delay}s ease;
  -moz-transition: all ${({ delay }) => delay}s ease;
  transition: all ${({ delay }) => delay}s ease;
`;

const SkillLang = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  -webkit-transition: all 2s ease;
  -moz-transition: all 2s ease;
  transition: all 2s ease;
  background: ${({ color }) => color.clearer(0.9)};

  &:hover {
    background: ${({ color }) => color.clearer(0.5)};
  }
`;

export default class MySkills extends React.Component {
  state = {
    hoverIndex: undefined
  };

  onEnter = hoverIndex => {
    this.setState({ hoverIndex });
  };

  onLeave = () => {
    this.setState({ hoverIndex: undefined });
  };

  render() {
    const { page } = this.props;
    const { hoverIndex } = this.state;

    return (
      <Skills>
        {skills.map((skill, skillIndex) => (
          <SkillSection key={skill.key} color={page.color}>
            <SkillList>
              {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map(index => (
                <SkillBar
                  color={
                    hoverIndex != null && hoverIndex === skillIndex
                      ? page.color.clearer(0.5)
                      : page.color.clearer(0.9)
                  }
                  fill={index + 1 <= skill.value}
                  delay={Math.floor((index + 2) / 2)}
                />
              ))}

              <SkillLang
                onMouseEnter={this.onEnter.bind(this, skillIndex)}
                onMouseLeave={this.onLeave}
                color={page.color}
              >
                {langIcon(skill.key)}
              </SkillLang>
            </SkillList>
          </SkillSection>
        ))}
      </Skills>
    );
  }
}
