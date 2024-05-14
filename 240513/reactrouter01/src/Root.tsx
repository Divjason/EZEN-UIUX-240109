import Router from "./Router";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      <Outlet context={{ darkMode: true }} />
    </div>
  );
}

export default App;
