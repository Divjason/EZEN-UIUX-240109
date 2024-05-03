import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import DataView from "./components/DataView";
import ToDoInput from "./components/ToDoInput";
import Button from "./components/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;

const ShowInputButton = styled.div`
  position: absolute;
  z-index: 1;
  right: 40px;
  bottom: 40px;
`;

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([
    "React 공부하기",
    "TypeScript 공부하기",
    "운동하기",
  ]);
  const [showToDoInput, setShowToDoInput] = useState(true);

  const onAdd = (toDo: string) => {
    if (toDo === "") return;
    setToDoList([toDo, ...toDoList]);
    setToDo("");
    setShowToDoInput(false);
  };

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };
  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      {showToDoInput && <ToDoInput onAdd={onAdd} />}
      <ShowInputButton>
        <Button
          label={showToDoInput ? "닫기" : "할 일 추가"}
          color={showToDoInput ? undefined : "#304ffe"}
          onClick={() => setShowToDoInput(!showToDoInput)}
        />
      </ShowInputButton>
    </Container>
  );
}

export default App;
