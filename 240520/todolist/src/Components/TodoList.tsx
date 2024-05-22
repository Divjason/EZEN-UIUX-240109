import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { toDoSelector, categoryState, Categories } from "./atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const TodoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <div>
      <h1>Todo's</h1>
      <hr />
      <CreateTodo />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>ToDo</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      {toDos?.map((toDo) => (
        <Todo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
};

export default TodoList;
