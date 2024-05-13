import React from "react";
import { Styled } from "styled-components";
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle borderColor="yellow" bgColor="teal" />
      <Circle text="im here" bgColor="tomato" />
    </div>
  );
}

export default App;
