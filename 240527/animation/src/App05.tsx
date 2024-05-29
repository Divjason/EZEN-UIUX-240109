import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

// -800 => 2
// -400 => 1.5
// 0 => 1
// 400 => 0.5
// 800 => 0

function App() {
  const { scrollY, scrollYProgress } = useScroll();
  useEffect(() => {
    scrollY.on("change", () =>
      console.log(scrollY.get(), scrollYProgress.get())
    );
  }, [scrollY, scrollYProgress]);
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
    ]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
