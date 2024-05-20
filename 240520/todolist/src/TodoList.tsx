import React, { useState } from "react";
import { useForm } from "react-hook-form";

// event가 발생하면, target도 존재하고, currentTarget
// currentTarget : event 핸들러가 바인딩되어 있는 요소의 value값을 찾아오고자 할 때
// target : 실제 event가 발생된 요소의 value값을 찾아오고자 할 때
// React.js에서는 currentTarget을 사용해서 value값을 찾을 때에는 FormEvent
// target을 사용해서 value값을 찾고자 할 때에는 ChangeEvent

const TodoList = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(watch());
  const onValid = (data: any) => {
    console.log(data.errors);
  };
  const [toDo, setTodo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setToDoError("Todo should be more longer...");
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onValid)}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          gap: "10px",
        }}
      >
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Za-z0-9]+@naver.com/gm,
              message: "Only naver.com emails allowed",
            },
          })}
          type="email"
          placeholder="Email"
        />
        <input
          {...register("firstname", { required: true })}
          type="text"
          placeholder="First Name"
        />
        <input
          {...register("lastname", { required: true })}
          type="text"
          placeholder="Last Name"
        />
        <input
          {...register("username", { required: true, minLength: 10 })}
          type="text"
          placeholder="User Name"
        />
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short",
            },
          })}
          type="password"
          placeholder="password"
        />
        <span>{errors.password?.message as string}</span>
        <input
          {...register("password1", {
            required: "Password1 is required",
            minLength: {
              value: 5,
              message: "Your Password is too short",
            },
          })}
          type="password"
          placeholder="password1"
        />
        <span>{errors.password1?.message as string}</span>
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoList;
