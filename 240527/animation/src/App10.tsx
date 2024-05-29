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
  justify-content: center;
  align-items: center;
  gap: 200px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  /* width: 400px; */
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 60px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  // const [clicked, setClicked] = useState(false);
  // const toggle = () => {
  //   setClicked((prev) => !prev);
  // };
  const [id, setId] = useState<string | null>(null);
  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((n) => (
          <Box onClick={() => setId(n + "")} key={n} layoutId={n + ""} />
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box style={{ width: 600, height: 400 }} layoutId={id} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
