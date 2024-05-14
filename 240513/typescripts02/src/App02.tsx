import React from "react";
import { styled, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.textColor};
`;

interface DummyProps {
  text: string;
  otherThingHere?: boolean;
}

const Dummy = ({ text, otherThingHere = false }: DummyProps) => {
  return <h1 style={{ color: "#fff" }}>{text}</h1>;
};

const App02 = () => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    alert("Hello");
  };
  return (
    <>
      <GlobalStyle />
      <Container>
        <H1>protected</H1>
        <Dummy text="Hello" otherThingHere={true} />
        <button onClick={onClick}>Click me</button>
      </Container>
    </>
  );
};

export default App02;
