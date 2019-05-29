import React from "react";
import ReactDOM from "react-dom";
import MovieContainer from "./movieContainer";

import "./styles.css";

function App() {
  return (
    <div className="App container">
      <MovieContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
