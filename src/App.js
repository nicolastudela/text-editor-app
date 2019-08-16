import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./logo.svg";
import { getInitalText } from "./api";
import Editor from "./components/Editor";

function App() {
  const [text, setText] = useState();
  useEffect(() => {
    async function getText() {
      const initialText = await getInitalText();
      setText(initialText);
    }
    getText();
  }, []);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="App-header-container">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
              <code>Editor Challenge</code>
            </h1>
          </div>
        </header>
        <Editor initialText={text} />
      </div>
      <div id="modal" />
    </>
  );
}

export default App;
