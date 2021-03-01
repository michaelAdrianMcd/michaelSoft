import React, { useEffect, useState } from "react";
import Landing from "./pages/Landing.js";
import Resume from "./pages/Resume.js";
import Arrow from "./components/Arrow";
import styled from "styled-components";

function App() {
  return (
    <AppWrapper>
      <Arrow></Arrow>
      <Landing />
      <Resume />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;
