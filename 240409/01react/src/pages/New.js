import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const { onCreate } = useContext(DiaryDispatchContext);
  const onSubmit = (data) => {
    const { date, emotionId, content } = data;
    onCreate(date, emotionId, content);
    navigate("/");
  };
  return (
    <div>
      <Header
        leftChild={<Button onClick={goBack} text="< 뒤로가기" />}
        title="새 일기 쓰기"
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
