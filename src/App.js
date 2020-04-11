import React, { Component } from "react";

import { TicTacToeGrid } from "./components/TicTacToeGrid";

class App extends Component {
  state = {
    ticTacToeCells: [
      [{ player: null }, { player: null }, { player: null }],
      [{ player: null }, { player: null }, { player: null }],
      [{ player: null }, { player: null }, { player: null }],
    ],
    cellSize: window.innerWidth / 3,
    player: 1,
  };

  render() {
    const { ticTacToeCells, cellSize } = this.state;
    return <TicTacToeGrid cells={ticTacToeCells} cellSize={cellSize} />;
  }
}

export default App;
