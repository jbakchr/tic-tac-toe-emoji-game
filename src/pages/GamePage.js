import React, { Component } from "react";
import { Typography } from "@material-ui/core";

import { TicTacToeGrid } from "../components/Game/TicTacToeGrid";
import { WinSection } from "../components/Game/WinSection";

class GamePage extends Component {
  state = {
    ticTacToeCells: [
      [{ player: null }, { player: null }, { player: null }],
      [{ player: null }, { player: null }, { player: null }],
      [{ player: null }, { player: null }, { player: null }],
    ],
    cellSize: window.innerWidth / 3,
    player: 1,
    gameOver: false,
    drawCounter: 0,
  };

  cellClickHandler = (player, rowIndex, columnIndex) => {
    // First we check if the game is already over or if "drawCounter" is equal to 9
    // hence indicating that the game is a draw
    if (this.state.gameOver || this.state.drawCounter === 9) {
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

    if (gameOver) {
      this.setState({
        ticTacToeCells: cellsCopy,
        gameOver: gameOver,
      });
    } else {
      this.setState((prevState) => {
        return {
          ticTacToeCells: cellsCopy,
          player: this.state.player === 1 ? 2 : 1,
          gameOver: gameOver,
          drawCounter: ++prevState.drawCounter,
        };
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

  playAgainHandler = () => {
    this.setState({
      ticTacToeCells: [
        [{ player: null }, { player: null }, { player: null }],
        [{ player: null }, { player: null }, { player: null }],
        [{ player: null }, { player: null }, { player: null }],
      ],
      player: 1,
      gameOver: false,
      drawCounter: 0,
    });
  };

  render() {
    const {
      ticTacToeCells,
      cellSize,
      player,
      gameOver,
      drawCounter,
    } = this.state;
    console.log("drawCounter:", drawCounter);

    let winSection = null;
    if (gameOver) {
      winSection = (
        <WinSection player={player} playAgain={this.playAgainHandler} />
      );
    } else if (drawCounter === 9) {
      winSection = <WinSection draw={true} playAgain={this.playAgainHandler} />;
    }

    let playerSelection = null;
    if (!gameOver && !drawCounter === 9) {
      let playerEmoji = player === 1 ? "👻" : "🧟";
      playerSelection = (
        <Typography
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 15,
            fontSize: 20,
          }}
        >{`${playerEmoji} to choose ..`}</Typography>
      );
    }

    return (
      <div>
        <TicTacToeGrid
          cells={ticTacToeCells}
          cellSize={cellSize}
          onCellClick={this.cellClickHandler}
          player={player}
        />
        {playerSelection}
        {winSection}
      </div>
    );
  }
}

export default GamePage;
