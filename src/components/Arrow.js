// <!-- <svg width="52" height="30" viewBox="0 0 52 30" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M23.5251 28.4749C24.892 29.8417 27.108 29.8417 28.4749 28.4749L50.7487 6.20101C52.1156 4.83417 52.1156 2.6181 50.7487 1.25126C49.3819 -0.115575 47.1658 -0.115574 45.799 1.25126L26 21.0503L6.20101 1.25126C4.83417 -0.11557 2.6181 -0.11557 1.25126 1.25127C-0.115575 2.6181 -0.115574 4.83418 1.25126 6.20101L23.5251 28.4749ZM22.5 25L22.5 26L29.5 26L29.5 25L22.5 25Z" fill="black"/>
// </svg> -->

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useScroll } from "../useScroll";
import smoothscroll from "smoothscroll-polyfill";

function Arrow(props) {
  const { scrollX, scrollY, scrollDirection } = useScroll();
  const arrowClick = () => {
    if (scrollY > window.innerHeight / 2) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };
  return (
    <Shaker bottomed={scrollY >= window.innerHeight}>
      <SVG
        bottomed={scrollY >= window.innerHeight}
        onClick={() => arrowClick()}
        rotated={scrollY > window.innerHeight / 2}
        width={52}
        height={30}
        viewBox={"0 0 52 30"}
        preserveAspectRatio={"xMidYMid meet"}
        fill="none"
        {...props}
      >
        <path
          d="M23.525 28.475a3.5 3.5 0 004.95 0L50.749 6.2a3.5 3.5 0 10-4.95-4.95L26 21.051 6.201 1.25a3.5 3.5 0 00-4.95 4.95l22.274 22.274zM22.5 25v1h7v-1h-7z"
          fill="#09100e"
        />
      </SVG>
    </Shaker>
  );
}

export default Arrow;

smoothscroll.polyfill();

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

const shake = keyframes`
  0% { transform:  rotate(0deg); }
  10% { transform:  rotate(-5deg); }


  60% { transform: rotate(5deg); }

  90% { transform:  rotate(-5deg); }
  100% { transform: rotate(0deg); }
`;

const Shaker = styled.div`
  position: ${(props) => (props.bottomed ? "absolute" : "fixed")};
  top: ${(props) => (props.bottomed ? "calc((var(--vh, 1vh) * 105))" : "50px")};
  right: 50px;
  width: 52px;
  height: 30px;
  z-index: 5;
  :hover {
    animation: ${shake} 0.2s;
  }
`;
const SVG = styled.svg`
  -webkit-backface-visibility: none;
  backface-visibility: none;

  z-index: 5;
  transition: transform 0.3s;
  transform: ${(props) => (props.rotated ? "rotate(-180deg)" : "")};
  cursor: pointer;

  @media only screen and (max-width: 780px) {
    display: none;
  }
`;
