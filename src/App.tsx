import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {

  const handle = (e: React.KeyboardEvent<HTMLDivElement>) => {
    console.log('Hello');
    console.log(e);
  }

  return (
    <div className="App" onKeyDown={handle}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <button onKeyDown={handle}>Hi</button> */}
      </header>
    </div>
  );
}

export default App;
