import React from "react";
import { Grid } from "@material-ui/core";

export const TicTacToeCell = (props) => {
  console.log(props);

  let cell = null;
  if (props.cell.player) {
    cell = props.cell.player === 1 ? "👻" : "🧟";
  }

  return (
    <Grid
      item
      xs={4}
      component="div"
      style={{
        height: props.cellSize,
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: 50 }}>{cell}</p>
    </Grid>
  );
};
