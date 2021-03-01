import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

function Vectorwaves(props) {
  return (
    <Container {...props}>
      <SVG
        fill="none"
        preserveAspectRatio={"xMinYMin meet"}
        viewBox={"0 0 1500 1500"}
        // width={3675}
        // height={418}
        {...props}
        // animations turned off in safari for now --- rly dirty fix i know :(
        // animate={navigator.userAgent.toLowerCase().indexOf("safari/") > -1}
      >
        <path
          d="M498.787 89.3194C454.75 18.499 347.5 -67 249.199 89.3194V316.791C333.797 197.42 410.287 200.195 498.787 316.791V89.3194Z"
          fill="#E1B5D0"
        />
        <path
          d="M0.47229 315.472C44.5089 386.292 151.759 471.791 250.06 315.472V88C165.462 207.371 88.9721 204.597 0.472292 88L0.47229 315.472Z"
          fill="#E1B5D0"
        />
        <path
          d="M995.787 89.0091C951.75 18.1887 844.5 -67.3103 746.199 89.0091V316.481C830.797 197.11 907.287 199.884 995.787 316.481V89.0091Z"
          fill="#E1B5D0"
        />
        <path
          d="M497.472 315.162C541.509 385.982 648.759 471.481 747.06 315.162V87.6897C662.462 207.061 585.972 204.286 497.472 87.6897V315.162Z"
          fill="#E1B5D0"
        />
        <path
          d="M1989.79 89.0091C1945.75 18.1887 1838.5 -67.3103 1740.2 89.0091V316.481C1824.8 197.11 1901.29 199.884 1989.79 316.481V89.0091Z"
          fill="#E1B5D0"
        />
        <path
          d="M1491.47 315.162C1535.51 385.982 1642.76 471.481 1741.06 315.162V87.6897C1656.46 207.061 1579.97 204.286 1491.47 87.6897V315.162Z"
          fill="#E1B5D0"
        />
        <path
          d="M2487.63 88.0091C2443.59 17.1887 2336.34 -68.3103 2238.04 88.0091V315.481C2322.64 196.11 2399.13 198.884 2487.63 315.481V88.0091Z"
          fill="#E1B5D0"
        />
        <path
          d="M1988.47 315.472C2032.51 386.292 2139.76 471.791 2238.06 315.472V88C2153.46 207.371 2076.97 204.597 1988.47 88V315.472Z"
          fill="#E1B5D0"
        />
        <path
          d="M1492.63 89.0091C1448.59 18.1887 1341.34 -67.3103 1243.04 89.0091V316.481C1327.64 197.11 1404.13 199.884 1492.63 316.481V89.0091Z"
          fill="#E1B5D0"
        />
        <path
          d="M994.472 316.472C1038.51 387.292 1145.76 472.791 1244.06 316.472V89C1159.46 208.371 1082.97 205.597 994.472 89V316.472Z"
          fill="#E1B5D0"
        />
        <path
          d="M3482.79 88.0091C3438.75 17.1887 3331.5 -68.3103 3233.2 88.0091V315.481C3317.8 196.11 3394.29 198.884 3482.79 315.481V88.0091Z"
          fill="#E1B5D0"
        />
        <path
          d="M2984.47 314.162C3028.51 384.982 3135.76 470.481 3234.06 314.162V86.6897C3149.46 206.061 3072.97 203.286 2984.47 86.6897V314.162Z"
          fill="#E1B5D0"
        />
        <path
          d="M3481.47 314.472C3525.51 385.292 3632.76 470.791 3731.06 314.472V87C3646.46 206.371 3569.97 203.597 3481.47 87V314.472Z"
          fill="#E1B5D0"
        />
        <path
          d="M2985.63 88.0091C2941.59 17.1887 2834.34 -68.3103 2736.04 88.0091V315.481C2820.64 196.11 2897.13 198.884 2985.63 315.481V88.0091Z"
          fill="#E1B5D0"
        />
        <path
          d="M2487.47 315.472C2531.51 386.292 2638.76 471.791 2737.06 315.472V88C2652.46 207.371 2575.97 204.597 2487.47 88V315.472Z"
          fill="#E1B5D0"
        />
      </SVG>
    </Container>
  );
}

export default Vectorwaves;

const slither = keyframes`
    0% {
        transform: translate3d(0, 0, 0)
    }
    100% {
      transform: translate3d(33.1%, 0, 0);
    }
`;

const Container = styled.div`
  display: inline-block;
  position: absolute;

  bottom: ${(props) => (props.top ? "" : "0")};
  width: 100%;
  padding-bottom: 29%;
  z-index: 0;
  /* vertical-align: middle; */
  /* overflow: hidden; */
`;

const SVG = styled.svg`
  /*animations turned off in safari for now */
  animation: ${(props) =>
    !props.animate
      ? css`
          ${slither} 6s linear infinite
    ${(props) =>
            props.RL ? "" : "reverse"}
        `
      : ""};
  display: inline-block;
  animation-duration: 6s;
  position: absolute;
  height: 568%;
  width: 164.88%;
  top: ${(props) => (props.top ? "-85%" : "31%")};
  left: -63%;
`;

// width={3675} height={418}
