import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [text, setText] = useState("");
  const textRef = useRef();
  console.log(textRef);

  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleOnClick = () => {
    if (text.length < 5) {
      textRef.current.focus();
    } else {
      alert(text);
      textRef.current.value = "";
    }
  };
  return (
    <div className="App">
      <input ref={textRef} value={text} onChange={handleOnChange} />
      <button onClick={handleOnClick}>작성완료</button>
    </div>
  );
}

export default App;
