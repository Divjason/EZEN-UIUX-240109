import React from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { toDoState, categoryState } from "./atoms";

interface IForm {
  toDo: string;
}

const CreateTodo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <form
      onSubmit={handleSubmit(handleValid)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <input
        {...register("toDo", { required: "Please Write a todo..." })}
        type="text"
        placeholder="Write a todo..."
      />
      <button>Add</button>
    </form>
  );
};

export default CreateTodo;
