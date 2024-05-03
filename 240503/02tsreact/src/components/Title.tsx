import React from "react";
import styled from "styled-components";

const Label = styled.h1`
  font-size: 2rem;
  margin-bottom: 16px;
`;

interface Props {
  label: string;
}

const Title = ({ label }: Props) => {
  return <Label>{label}</Label>;
};

export default Title;
