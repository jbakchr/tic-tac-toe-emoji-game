import React from "react";
import { Box, Button, Typography } from "@material-ui/core";

export const WinSection = (props) => {
  let winCheck = null;
  if (props.player) {
    winCheck = `Player ${props.player} wins!`;
  } else if (props.draw) {
    winCheck = "It's a draw ..";
  }

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Typography>{winCheck}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={props.playAgain}
        style={{ marginTop: 10 }}
      >
        Play again
      </Button>
    </Box>
  );
};
