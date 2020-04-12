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
    gameOver: false,
  };

  cellClickHandler = (player, rowIndex, columnIndex) => {
    if (this.state.gameOver) {
      return;
    }

    // First we get a copy of "ticTacToeCells"
    const cellsCopy = [...this.state.ticTacToeCells];

    // The we check if cell is already clicked
    if (cellsCopy[rowIndex][columnIndex].player) {
      return;
    }

    // If the cell hasn't been clicked then we update the cell
    cellsCopy[rowIndex][columnIndex].player = player;

    // Thereafte we check if the present player has won
    const gameOver = this.checkWinConditions(cellsCopy, player);
    console.log("game over", gameOver);

    if (gameOver) {
      this.setState({
        ticTacToeCells: cellsCopy,
        gameOver: gameOver,
      });
    } else {
      this.setState({
        ticTacToeCells: cellsCopy,
        player: this.state.player === 1 ? 2 : 1,
        gameOver: gameOver,
      });
    }
  };

  checkWinConditions = (cellsCopy, player) => {
    return (
      this.checkHorizontalWin(cellsCopy, player) ||
      this.checkVerticalWin(cellsCopy, player) ||
      this.checkDescDiagonalWin(cellsCopy, player) ||
      this.checkAscDiagonalWin(cellsCopy, player)
    );
  };

  checkHorizontalWin = (cellsCopy, player) => {
    let counter = 0;
    let hasWon = false;

    // Loop through each row in "ticTacToeCells" and check for 3 in a row
    for (let i = 0; i < cellsCopy.length; i++) {
      if (hasWon) {
        break;
      }
      for (let j = 0; j < cellsCopy.length; j++) {
        if (cellsCopy[i][j].player === player) {
          ++counter;
          if (counter === 3) {
            hasWon = true;
          }
        } else {
          counter = 0;
          break;
        }
      }
    }

    return hasWon;
  };

  checkVerticalWin = (cellsCopy, player) => {
    let counter = 0;
    let hasWon = false;

    // Loop through each column and check for 3 in a row
    for (let i = 0; i < cellsCopy.length; i++) {
      if (hasWon) {
        break;
      }
      for (let j = 0; j < cellsCopy.length; j++) {
        if (cellsCopy[j][i].player === player) {
          ++counter;
          if (counter === 3) {
            hasWon = true;
          }
        } else {
          counter = 0;
          break;
        }
      }
    }

    return hasWon;
  };

  checkDescDiagonalWin = (cellSCody, player) => {
    let counter = 0;
    let hasWon = false;

    for (let i = 0; i < cellSCody.length; i++) {
      if (cellSCody[i][i].player === player) {
        ++counter;
        if (counter === 3) {
          hasWon = true;
        }
      }
    }

    return hasWon;
  };

  checkAscDiagonalWin = (cellsCopy, player) => {
    let counter = 0;
    let hasWon = false;

    let columnIndex = 0;
    for (let i = 2; i >= 0; i--) {
      if (cellsCopy[i][columnIndex].player === player) {
        ++counter;
        ++columnIndex;
        if (counter === 3) {
          hasWon = true;
        }
      }
    }

    return hasWon;
  };

  render() {
    const { ticTacToeCells, cellSize, player, gameOver } = this.state;

    if (gameOver) {
      console.log("Player wins:", player);
    }

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
