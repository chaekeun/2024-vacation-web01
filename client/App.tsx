import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Detail from "./Detail";

function welcome() {
  console.log("Welcome... ");
  document.getElementById("test")!.innerHTML =
    document.getElementById("test")!.innerHTML + " Button Click!! ";
}

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        This is Navbar
        <a href="/detail">
          <button>렌더링 테스트</button>
        </a>
      </div>
      <button onClick={welcome}>Click Me!</button>
      <Routes>
        <Route path="/detail" element={<Detail></Detail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
