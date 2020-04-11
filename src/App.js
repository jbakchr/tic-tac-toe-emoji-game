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

  cellClickHandler = (player, rowIndex, columnIndex) => {
    console.log("I'm clicked by:", player);
    console.log("row:", rowIndex);
    console.log("column:", columnIndex);
  };

  render() {
    const { ticTacToeCells, cellSize, player } = this.state;
    return (
      <TicTacToeGrid
        cells={ticTacToeCells}
        cellSize={cellSize}
        onCellClick={this.cellClickHandler}
        player={player}
      />
    );
  }
}

export default App;
