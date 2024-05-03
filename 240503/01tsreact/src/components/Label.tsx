import React from "react";
import styled from "styled-components";

const Container = styled.span`
  font-size: 1.2rem;
  margin: 0 16px;
`;

interface Props {
  data: number;
}

const Label = ({ data }: Props) => {
  return <Container>{data}</Container>;
};

export default Label;
