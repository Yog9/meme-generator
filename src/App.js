import React, { Component } from "react";

import Generator from "./Generator";
class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1>Meme Generator</h1>
        </div>
        <Generator />
      </div>
    );
  }
}

export default App;
