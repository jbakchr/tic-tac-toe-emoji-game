import React from "react";
import { Grid } from "@material-ui/core";

import { EmojiGridCell } from "./EmojiGridCell";

export const EmojiGrid = ({ emojis, gridSize }) => {
  console.log("emojis", emojis);

  const renderEmojiGridCells = () => {
    return emojis.map((emoji) => {
      return (
        <EmojiGridCell key={Math.random()} gridSize={gridSize} emoji={emoji} />
      );
    });
  };

  return (
    <Grid container style={{ border: "1px solid black" }}>
      {renderEmojiGridCells()}
    </Grid>
  );
};
