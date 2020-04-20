import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export const NavBar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography>Tic Tac Toe Emoji</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};
