import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";

const ChildComp = () => {
  return <div>child component</div>;
};

function App() {
  const BodyProps = {
    name: "Daivd",
    location: "서울시",
    // favorList: ["파스타", "햄버거", "떡볶이"],
  };
  return (
    <div className="App">
      <Header />
      <Body {...BodyProps} />
      <Buttons />
      <Footer>
        <ChildComp />
      </Footer>
    </div>
  );
}

export default App;
