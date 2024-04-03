import "./App.css";
import Viewer from "./components/Viewer";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const onDecrease = () => {
    setNumber(number - 1);
  };
  const onIncrease = () => {
    setNumber(number + 1);
  };
  return (
    <div className="App">
      <h2>{number}</h2>
      <Viewer number={number} />
      <div>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
}

export default App;
