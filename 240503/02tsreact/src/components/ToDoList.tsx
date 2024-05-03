import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  toDoList: string[];
  onDelete: (todo: string) => void;
}

const ToDoList = ({ toDoList, onDelete }: Props) => {
  return (
    <Container>
      {toDoList.map((todo, idx) => (
        <TodoItem key={idx} label={todo} onDelete={() => onDelete(todo)} />
      ))}
    </Container>
  );
};

export default ToDoList;
