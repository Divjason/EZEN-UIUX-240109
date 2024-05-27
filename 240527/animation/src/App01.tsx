import React from "react";
import styled from "styled-components";
import { delay, motion, stagger } from "framer-motion";
import { start } from "repl";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  background: #fff;
  border-radius: 70px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  place-self: center;
`;

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      delay: 0.5,
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 1,
      staggerChildren: 0.2,
    },
  },
};

const circleVariants = {
  start: { scale: 0, opacity: 0, y: 40 },
  end: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      bounce: 0.8,
    },
  },
};

function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </Wrapper>
  );
}

export default App;
