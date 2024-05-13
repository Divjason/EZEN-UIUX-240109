import React, { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border: 6px solid ${(props) => props.borderColor};
  border-radius: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ContainerProps {
  bgColor: string;
  borderColor: string;
  text?: string;
}

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Circle = ({
  bgColor,
  borderColor,
  text = "default text",
}: CircleProps) => {
  const [counter, setCounter] = useState<number | string>(1);
  setCounter("hello");
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
};

export default Circle;
