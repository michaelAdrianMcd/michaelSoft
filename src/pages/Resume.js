import React from "react";
import Vectorwaves from "../components/Vectorwaves";
import styled from "styled-components";
import PDF from "./MichaelMcDonaldCV2021.pdf";
const HeartIcon = require("../components/HeartIcon.svg");

function Resume(props) {
  return (
    <Container>
      <Vectorwaves top />
      <Vectorwaves RL />
      <TextBox>
        <TopRow>
          <H1>CV</H1>
          <PDFLink href={PDF} target="_blank" rel="noopener noreferrer">
            PDF
          </PDFLink>
        </TopRow>
        <Content>
          <Column>
            <Title>Work Experience</Title>
            <SubTitle>
              <JobLink
                href="www.dextel.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dextel.net
              </JobLink>
              <Text>- Web Specialist</Text>
            </SubTitle>
            <Text date>Fall 2020 - Present</Text>
            <List>
              <Li>
                <ListText>
                  Participate in all stages of development on many projects at a
                  time, across a variety of tech stacks.
                </ListText>
              </Li>
              <Li>
                <ListText>
                  Act as the point of contact between clients and other
                  developers, both delegating tasks and tackling them myself.
                </ListText>
              </Li>
              <Li>
                <ListText>
                  Create wireframes for new projects and features to be
                  implemented by other developers on the team.
                </ListText>
              </Li>
            </List>
            <SubTitle>
              <JobLink
                href="https://upscale-technology.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Upscale Technology
              </JobLink>
              <Text> - Front-End Developer</Text>
            </SubTitle>
            <Text date>
              Fall 2018 - Winter 2019 & Summer 2019 - Winter 2020{" "}
            </Text>
            <List>
              <Li>
                <ListText>
                  Worked with React Native and Redux to help create and maintain
                  Upscale Technology’s flagship mobile application, Uptune.
                </ListText>
              </Li>
              <Li>
                <ListText>
                  Worked in an Agile environment, creating and completing tasks
                  with Jira and Git.
                </ListText>
              </Li>
              <Li>
                <ListText>
                  Created and styled dynamic React and React Native components
                  from UX wireframes.
                </ListText>
              </Li>
              <Li>
                <ListText>
                  Implemented the current design of the Upscale Technology
                  website.
                </ListText>
              </Li>
              <Li>
                <ListText>
                  Created the web version and implemented new features for
                  Uptune.
                </ListText>
              </Li>
            </List>
          </Column>
          <Column right>
            <SubTitle>
              <JobLink
                href="https://www.keywordsstudios.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Keywords Studios
              </JobLink>
              <Text>- FQA Tester</Text>
            </SubTitle>
            <Text date> Spring 2019</Text>
            <List>
              <Li>
                <ListText>
                  Communicate directly with game developers while finding and
                  reporting bugs in their games.
                </ListText>
              </Li>
              <Li>
                <ListText>
                  Adhere to strict company guidelines on formatting when
                  creating issues in Jira for developers.
                </ListText>
              </Li>
            </List>
            <Title>Technical Skills</Title>
            <Text skill>
              <SkillTitle>Front-End:</SkillTitle> ​React, React Native, Redux,
              CSS (SASS, CSS in JS), HTML5
            </Text>
            <Text skill>
              <SkillTitle>Back-End:</SkillTitle>​ Firebase, Node.js, Express,
              SQL
            </Text>
            <Text skill>
              <SkillTitle>Tools:</SkillTitle> ​Git/Github/GitKraken, Jira, Figma
            </Text>
          </Column>
        </Content>
      </TextBox>
    </Container>
  );
}

export default Resume;

// remember to make width adjusting function for both pages (firefox scrollbar thing)

const Container = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #a4c9bc;
  min-height: 100vh;
  width: 100vw;
`;

const TextBox = styled.div`
  margin: 5%;
  position: relative;
  z-index: 1;
`;

const TopRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

const H1 = styled.h1`
  max-width: 771px;
  /* position: absolute;
  left: 607px;
  top: 200px; */
  position: relative;
  z-index: 1;
  font-family: Archivo Black, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 96px;
  line-height: 89px;
  margin: 0;
  /* or 93% */

  color: hsl(158.9, 25.5%, 5%);
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 550px));
  grid-gap: 1rem;
  font-family: Lato, sans-serif;
  color: hsl(158.9, 25.5%, 5%);

  max-height: 559px;

  @media only screen and (max-width: 1239px) {
    max-height: unset;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${(props) => (props.right ? "22%" : "")};
  margin-top: ${(props) => (props.right ? "37px" : "")};

  @media only screen and (max-width: 1239px) {
    margin-left: 0;
    margin-top: 0;
  }
`;

const Title = styled.h2`
  position: relative;
  z-index: 1;
  margin: 0;
  font-weight: 500;
  font-style: normal;
  font-size: 36px;
  line-height: 89px;
  /* or 247% */
  text-decoration-line: underline;
  color: hsl(158.9, 25.5%, 5%);
`;

const SubTitle = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  font-size: 20px;
  line-height: 26px;
  margin: 0;

  @media only screen and (max-width: 400px) {
    font-size: 16px;
  }
`;

const Text = styled.p`
  line-height: ${(props) => (props.date ? "11px" : "20px")};
  margin: 0;
  margin-bottom: ${(props) => (props.skill ? "20px" : "0")};
  font-size: ${(props) => (props.date ? "12px" : "")};
`;

const JobLink = styled.a`
  margin: 0;
  font-weight: bold;
  text-decoration-line: underline;
  color: #1e4f9b;
  margin-right: 4px;
`;

const PDFLink = styled(JobLink)`
  padding-bottom: 10px;
`;

const List = styled.ul`
  list-style-image: url(${HeartIcon});
  list-style-position: outside;

  margin: 0;
  padding: 0px 0px 22px 22px;
`;

const Li = styled.li`
  /* display: inline-block; */
  margin: 15px 0;
`;

const ListText = styled.span`
  display: inline-block;
  /* line-height: 24px; */
  vertical-align: top;
  margin-top: -3.5px;
`;

const SkillTitle = styled.span`
  font-size: 20px;
  text-decoration: underline;
  display: inline-block;
`;
