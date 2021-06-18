import React, { useEffect, useState } from "react";
import Vectorwaves from "../components/Vectorwaves";
import VectorwavesDark from "../components/VectorwavesDark";
import styled, { keyframes } from "styled-components";

const photo = require("../components/Group1.png");

function Landing(props) {
  const [windowHeight, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    // track the window height in the state
    const updateWindowDimensions = () => {
      setHeight(window.innerHeight);
    };
    //add window height listener
    window.addEventListener("resize", updateWindowDimensions);

    //cleanup the event listener
    return function () {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, [windowHeight, setHeight]);

  return (
    <Container windowHeight={windowHeight}>
      <VectorwavesDark top RL />
      {/* <NavBar>
        <NavLink>Bridget's Blog</NavLink>
        <NavLink>{`          `}</NavLink>
        <NavLink>{`          `}</NavLink>
      </NavBar> */}
      <Content>
        <ImgWrapper>
          <Image width="" height="" src={photo}></Image>
        </ImgWrapper>
        <TextBox>
          <H1>Michael McDonald</H1>
          <P>
            Hi! My name is Mike and I'm a web developer who loves to learn :) I
            also love to play and record music, eat cheddar cheese, and slam one
            hundred club sodas in one day. Thanks for checking out my little
            website! For now you can find my CV below, and I'll add some more
            stuff soon.
          </P>
        </TextBox>
      </Content>

      <Vectorwaves />
    </Container>
  );
}

export default Landing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #a4c9bc;
  /* height: 100vh;
  height: calc(var(--vh, 1vh) * 100); */
  height: ${(props) => `${props.windowHeight}px`};
  width: 100vw;
  padding-left: 3%;
  @media only screen and (max-width: 1061px) {
    padding-left: 0;
    width: 100%;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 40%));

  /* grid-template-columns: 38% 40%; */
  grid-gap: 1rem;
  position: relative;
  margin: 0 auto;
  padding-left: 20px;
  top: 22%;
  max-width: 1200px;
  /* min-width: 1100px; */

  @media only screen and (max-width: 1061px) {
    grid-gap: 0%;
    grid-template-columns: repeat(auto-fill, minmax(47%, 47%));
  }

  @media only screen and (max-width: 780px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 550px));
    grid-gap: 0;
    max-width: 80%;
    top: 16%;
    padding-left: 0;
  }
`;

const TextBox = styled.div`
  top: 27%;
  position: relative;
  @media only screen and (max-width: 1061px) {
    top: 0;
    width: 105%;
    place-self: center;
  }
`;

const H1 = styled.h1`
  color: hsl(158.9, 25.5%, 5%);
  font-family: "Archivo Black", sans-serif;
  font-size: 96px;
  font-weight: 400;
  line-height: 79px;
  margin: 0;
  z-index: 1;
  letter-spacing: -4px;
  transition: text-shadow 0.2s ease-in-out, letter-spacing 0.2s ease-in-out;
  cursor: default;

  :hover {
    transition: none;
    text-shadow: -3px 3px 1px #73a090;
    letter-spacing: -2px;
  }

  @media only screen and (max-width: 1061px) {
    font-size: 55px;
    line-height: 44px;
    margin: 5% auto;
    letter-spacing: -2px;
  }
`;

const P = styled.p`
  margin: 10px 5px;
  font-family: Lato, sans-serif;
  font-size: 18px;
  line-height: 26px;
  z-index: 1;
  color: hsl(158.9, 25.5%, 5%);
  position: relative;
  z-index: 9;
  min-width: 130%;

  @media only screen and (max-width: 1061px) {
    min-width: 0;
    text-align: justify;
  }
`;

const NavBar = styled.div`
  position: absolute;
  display: flex;
  width: 400px;
  justify-content: space-between;
  top: 45px;
  left: 10%;
  z-index: 9;
  @media only screen and (max-width: 780px) {
    width: 100%;
    justify-content: flex-end;
    top: 0;
    left: 0;
  }
`;

const NavLink = styled(P)`
  text-decoration: underline;
  cursor: pointer;
  display: inline;
  min-width: 0px;
  :hover {
    font-style: italic;
  }
  @media only screen and (max-width: 780px) {
    font-size: 14px;
  }
`;

const ImgWrapper = styled.div`
  width: 432px;
  height: 432px;
  @media only screen and (max-width: 1061px) {
    width: 40vw;
    height: unset;
    /* padding-left: 5%; */
  }
`;

const Image = styled.img`
  /* border-radius: 5000px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  background: rgba(102, 138, 114, 70%);
  filter: brightness(70%) sepia(100%) hue-rotate(-74deg) saturate(140%); */
  width: 432px;
  animation: ${fadeIn} 0.5s linear;
  @media only screen and (max-width: 1061px) {
    width: 100%;
  }
`;
