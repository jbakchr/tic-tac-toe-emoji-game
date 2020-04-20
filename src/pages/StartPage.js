import React from "react";

import { EmojiGrid } from "../components/Emojis/EmojiGrid";

export const StartPage = ({ emojis, players, gridSize }) => {
  let header;
  if (!players[0].emoji) {
    header = "Please select an emoji player one";
  } else if (!players[1].emoji) {
    header = "Please select an emoji player two";
  } else {
    header = "Start tha game!";
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{header}</h2>
      <EmojiGrid emojis={emojis} gridSize={gridSize} />
    </div>
  );
};
