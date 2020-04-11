import React, { Component } from "react";

import { TicTacToeGrid } from "./components/TicTacToeGrid";

class App extends Component {
  state = {
    ticTacToeCells: [0, 1, 2],
  };

  render() {
    return <TicTacToeGrid cells={this.state.ticTacToeCells} />;
  }
}

export default App;
