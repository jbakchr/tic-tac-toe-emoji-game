import React from "react";
import { Grid } from "@material-ui/core";

export const TicTacToeCell = (props) => {
  return (
    <Grid
      item
      xs={4}
      component="div"
      style={{ height: props.cellSize, border: "1px solid black" }}
    >
      tis
    </Grid>
  );
};
