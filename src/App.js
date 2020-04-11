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

    // First we get a copy of "ticTacToeCells"
    const cellsCopy = [...this.state.ticTacToeCells];

    // Then we update this copy selected cell
    cellsCopy[rowIndex][columnIndex].player = player;
    console.log(cellsCopy);

    // And finally we update state
    this.setState({
      ticTacToeCells: cellsCopy,
      player: this.state.player === 1 ? 2 : 1,
    });
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
