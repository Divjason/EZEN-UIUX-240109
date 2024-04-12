// 커스텀 훅!!!!
// F/E 개발자가 직접 훅을 만들어서 사용가능
// JS class 객체의 형태를 커스텀
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";

const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [diary, setDiary] = useState();
  useEffect(() => {
    const matchDiary = data.find((it) => String(it.id) === String(id));
    if (matchDiary) {
      setDiary(matchDiary);
    }
  }, [id, data]);
  return diary;
};

export default useDiary;
