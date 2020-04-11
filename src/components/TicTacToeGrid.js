import React from "react";
import { Grid } from "@material-ui/core";

import { TicTacToeCell } from "./TicTacToeCell";

export const TicTacToeGrid = (props) => {
  const renderCells = () => {
    return props.cells.map((tableRow, rowIndex) => {
      return tableRow.map((element, columnIndex) => {
        return (
          <TicTacToeCell
            key={Math.random()}
            cellSize={props.cellSize}
            cell={element}
            onCellClick={props.onCellClick}
            player={props.player}
            rowIndex={rowIndex}
            columnIndex={columnIndex}
          />
        );
      });
    });
  };

  return <Grid container>{renderCells()}</Grid>;
};
