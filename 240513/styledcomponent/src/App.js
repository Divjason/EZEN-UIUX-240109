import { keyframes, styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 10px;
  background: ${(props) => props.theme.backgroundColor};
`;

const rotationAnimation = keyframes`
0% {
  transform: rotate(0deg);
  border-radius: 0px;
} 50% {
  transform: rotate(360deg);
  border-radius: 100px;
} 100% {
  transform: rotate(0deg);
  border-radius: 0px;
}
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji} {
    font-size: 36px;
    transition: all 0.3s;
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Container>
      <Box>
        <Emoji>😍</Emoji>
      </Box>
      <Emoji>🙄</Emoji>
    </Container>
  );
}

export default App;
