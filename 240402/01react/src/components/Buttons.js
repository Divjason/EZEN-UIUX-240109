import React from "react";

const Buttons = () => {
  const handleOnClick = (e) => {
    console.log(e.target.name);
  };
  return (
    <div>
      <button name="A버튼" onClick={handleOnClick}>
        A버튼
      </button>
      <button name="B버튼" onClick={handleOnClick}>
        B버튼
      </button>
    </div>
  );
};

export default Buttons;
