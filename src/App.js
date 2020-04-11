import React, { Component } from "react";

import { TicTacToeGrid } from "./components/TicTacToeGrid";

class App extends Component {
  state = {
    ticTacToeCells: [
      [0, 1, 2],
      [0, 1, 2],
    ],
    cellSize: 0,
  };

  componentDidMount() {
    const cellWidth = window.innerWidth / 3;
    console.log(cellWidth);
    this.setState({ cellSize: cellWidth });
  }

  render() {
    const { ticTacToeCells, cellSize } = this.state;
    return <TicTacToeGrid cells={ticTacToeCells} cellSize={cellSize} />;
  }
}

export default App;
