import React from "react";
import { useRecoilValue } from "recoil";
import { toDoState } from "./atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const TodoList = () => {
  const toDos = useRecoilValue(toDoState);
  console.log(toDos);
  return (
    <div>
      <h1>Todo's</h1>
      <hr />
      <CreateTodo />
      <ul>
        {toDos.map((toDo) => (
          <Todo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
