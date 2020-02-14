import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { toast } from "react-toastify";

const notifyMe = () =>
  toast.success("All Done right now!", {
    position: toast.POSITION.TOP_RIGHT
  });
function App() {
  const notify = () => toast("Wow so easy !");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={() => notifyMe()}>Click me to Nofity you!</button>
    </div>
  );
}

export default App;
