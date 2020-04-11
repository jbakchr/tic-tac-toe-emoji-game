import React, { Component } from "react";

import { TicTacToeGrid } from "./components/TicTacToeGrid";

class App extends Component {
  state = {
    ticTacToeCells: [[{ player: 1 }, { player: null }, { player: null }]],
    cellSize: window.innerWidth / 3,
  };

  // componentDidMount() {
  //   const cellWidth = window.innerWidth / 3;
  //   this.setState({ cellSize: cellWidth });
  // }

  render() {
    const { ticTacToeCells, cellSize } = this.state;
    return <TicTacToeGrid cells={ticTacToeCells} cellSize={cellSize} />;
  }
}

export default App;
