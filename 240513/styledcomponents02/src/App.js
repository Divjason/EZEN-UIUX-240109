import { keyframes, styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 8px;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const rotationAnimantion = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  } 
  50% {
    transform: rotate(360deg);
    border-radius: 200px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${rotationAnimantion} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
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
        <Emoji>😎</Emoji>
      </Box>
      <Emoji>😋</Emoji>
    </Container>
  );
}

export default App;
