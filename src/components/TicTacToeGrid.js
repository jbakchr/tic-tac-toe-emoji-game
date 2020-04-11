import React from "react";
import { Grid } from "@material-ui/core";

import { TicTacToeCell } from "./TicTacToeCell";

export const TicTacToeGrid = (props) => {
  console.log("cells:", props.cells);

  const renderCells = () => {
    return props.cells.map((tableRow, i) => {
      return tableRow.map((element) => {
        console.log(i, element);
        return <TicTacToeCell key={Math.random()} cellSize={props.cellSize} />;
      });
    });
  };

  return <Grid container>{renderCells()}</Grid>;
};
