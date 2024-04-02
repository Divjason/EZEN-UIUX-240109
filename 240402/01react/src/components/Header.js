const Header = () => {
  const handlOnClick = () => {
    alert("버튼을 클릭하셨군요! :D");
  };

  return (
    <header>
      <h1>header</h1>
      <button onClick={handlOnClick}>클릭하세요</button>
    </header>
  );
};

export default Header;
