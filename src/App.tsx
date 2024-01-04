import * as React from "react";

function welcome() {
  console.log("Welcome... ");
  document.getElementById("test")!.innerHTML =
    document.getElementById("test")!.innerHTML + " Button Click!! ";
}

function App() {
  return (
    <div className="App">
      <div id="test">Test </div>
      <button onClick={welcome}>Click Me!</button>
    </div>
  );
}

export default App;
