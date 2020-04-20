import React from "react";

import { EmojiGrid } from "../components/Emojis/EmojiGrid";

export const StartPage = ({ emojis, players, gridSize, onEmojiClick }) => {
  const renderHeader = () => {
    let header;
    if (!players[0].emoji) {
      header = "Please select an emoji player one";
    } else if (!players[1].emoji) {
      header = "Please select an emoji player two";
    } else {
      header = "Start tha game!";
    }
    return header;
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{renderHeader()}</h2>
      <p>Player one emoji: </p>
      <p>Player two emoji: </p>
      <EmojiGrid
        emojis={emojis}
        gridSize={gridSize}
        onEmojiClick={onEmojiClick}
      />
    </div>
  );
};
