import React from "react";
import styled from "styled-components";

import { SubHeading } from "../../common/Headings";

import media from "../../../utils/media";
import { langIcon } from "../../../utils/lang";
import { skills, otherSkills } from "./skills";

const Container = styled.div`
  margin-bottom: 5rem;
`;

const Skills = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 3rem;

  ${media.tablet`
    justify-content: space-evenly;
    margin-top: 0;
  `};
`;

const SkillGap = styled.hr`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid ${({ skillColor }) => skillColor.clearer(0.9)};
  background: transparent;
`;

const SkillSection = styled.div`
  width: 100px;

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
  background: ${({ shouldFill, skillColor }) =>
    shouldFill ? skillColor : `#9a9a9a`};
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
  background: ${({ skillColor }) => skillColor.clearer(0.9)};

  &:hover {
    cursor: pointer;
    background: ${({ skillColor }) => skillColor.clearer(0.5)};
  }

  svg {
    width: 50px;
    height: 50px;
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
      <Container>
        <Skills>
          {skills.map((skill, skillIndex) => (
            <SkillSection key={skill.key} skillColor={page.color}>
              <SkillList>
                {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map(index => (
                  <SkillBar
                    key={index}
                    skillColor={
                      hoverIndex != null && hoverIndex === skillIndex
                        ? page.color.clearer(0.5)
                        : page.color.clearer(0.9)
                    }
                    shouldFill={index + 1 <= skill.value}
                    delay={Math.floor((index + 2) / 2)}
                  />
                ))}

                <SkillLang
                  onMouseEnter={this.onEnter.bind(this, skillIndex)}
                  onMouseLeave={this.onLeave}
                  skillColor={page.color}
                >
                  {langIcon(skill.key)}
                </SkillLang>
              </SkillList>
            </SkillSection>
          ))}
        </Skills>

        <SkillGap skillColor={page.color} />

        <SubHeading>Other stuff I've worked or am working with</SubHeading>

        <Skills>
          {otherSkills.map(skill => (
            <SkillSection key={skill.key} skillColor={page.color}>
              <SkillList>
                <SkillLang skillColor={page.color}>
                  {langIcon(skill.key)}
                </SkillLang>
              </SkillList>
            </SkillSection>
          ))}
        </Skills>
      </Container>
    );
  }
}
