import React from "react";
import styled from "styled-components";

const Container = styled.button`
  background: ${(props) => props.color};
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;

  &:hover {
    background: ${(props) => props.color};
    opacity: 0.8;
  }

  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

interface Props {
  label: string;
  onClick?: () => void;
  color?: string;
}

const Button = ({ label, onClick, color = "#ff5722" }: Props) => {
  return (
    <Container color={color} onClick={onClick}>
      {label}
    </Container>
  );
};

export default Button;
