import React from "react";
import { Grid } from "@material-ui/core";

export const TicTacToeGrid = (props) => {
  console.log("cells:", props.cells);

  let ticTacToeCells = props.cells.map((element) => {
    console.log(element);
  });

  return (
    <Grid container>
      <p>Numse</p>
    </Grid>
  );
};
