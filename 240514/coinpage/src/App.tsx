import React from "react";
import Router from "./Router";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Source Sans 3", sans-serif;
  }
  body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  li {
    list-style: none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
