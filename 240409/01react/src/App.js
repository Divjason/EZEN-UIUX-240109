import "./App.css";
import React, { useReducer, useRef, useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

const mockData = [
  {
    id: "mock1",
    date: new Date().getTime(),
    emotionId: 1,
    content: "mock1",
  },
  {
    id: "mock2",
    date: new Date().getTime(),
    emotionId: 2,
    content: "mock2",
  },
  {
    id: "mock3",
    date: new Date().getTime(),
    emotionId: 3,
    content: "mock3",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      return [action.data, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        String(it.id) === String(action.data.id) ? { ...action.data } : it
      );
    }
    case "DELETE": {
      return state.filter((it) => String(it.id) !== String(action.targerId));
    }
    default: {
      return state;
    }
  }
};

export const DiaryStateContext = React.createContext();

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData,
    });
    setIsDataLoaded(true);
  }, []);
  const onCreate = (date, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        emotionId,
        content,
      },
    });
    idRef.current += 1;
  };

  const onUpdate = (targerId, date, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targerId,
        date: new Date(date).getTime(),
        emotionId,
        content,
      },
    });
  };

  const onDelete = (targerId) => {
    dispatch({
      type: "DELETE",
      targerId,
    });
  };
  if (!isDataLoaded) {
    return <div>데이터를 불러오는 중입니다.</div>;
  } else {
    return (
      <DiaryStateContext.Provider value={data}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit" element={<Edit />} />
          </Routes>
        </div>
      </DiaryStateContext.Provider>
    );
  }
}

export default App;
