import React from "react";
import { useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";

const Diary = () => {
  const { id } = useParams();
  const data = useDiary(id);
  return (
    <div>
      <div>{id}번 일기</div>
    </div>
  );
};

export default Diary;
