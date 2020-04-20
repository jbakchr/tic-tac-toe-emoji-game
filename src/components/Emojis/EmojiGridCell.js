import React from "react";
import { Grid } from "@material-ui/core";

export const EmojiGridCell = ({ gridSize, emoji, onEmojiClick, index }) => {
  return (
    <Grid
      item
      xs={4}
      style={{
        height: gridSize,
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 50,
      }}
      onClick={() => onEmojiClick(index)}
    >
      {emoji.character}
    </Grid>
  );
};
