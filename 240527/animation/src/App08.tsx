import React, { useState } from "react";
import styled from "styled-components";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useScroll,
} from "framer-motion";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  position: absolute;
  top: 80px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  border: 1px solid transparent;
  background: transparent;
  font-size: 24px;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    border: 1px solid #fff;
    transition: all 0.3s;
  }
`;

const box = {
  initial: (back: boolean) => ({
    x: back ? -300 : 300,
    opacity: 0,
    scale: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exits: (back: boolean) => ({
    x: back ? 300 : -300,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  }),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 10 : prev - 1));
  };
  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 1 : prev + 1));
  };
  return (
    <Wrapper>
      <AnimatePresence custom={back} mode="wait">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
          i === visible ? (
            <Box
              key={visible}
              variants={box}
              custom={back}
              initial="initial"
              animate="visible"
              exit="exits"
            >
              {visible}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <Buttons>
        <Button onClick={prevPlease}>PREV</Button>
        <Button onClick={nextPlease}>NEXT</Button>
      </Buttons>
    </Wrapper>
  );
}

export default App;
