import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import CreateTodo from "./CreateTodo";
import { toDoState } from "./atoms";

const TodoList = () => {
  const toDos = useRecoilValue(toDoState);
  return (
    <div>
      <h1>Todo's</h1>
      <hr />
      <CreateTodo />
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
