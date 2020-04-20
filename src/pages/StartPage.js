import React from "react";
import { Button } from "@material-ui/core";

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

  const renderStartGameButton = () => {
    let disabled = false;
    if (!players[0].emoji || !players[1].emoji) {
      disabled = true;
    }

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Button variant="contained" color="primary" disabled={disabled}>
          Start Game
        </Button>
      </div>
    );
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: 30 }}>
        {renderHeader()}
      </h2>
      <div style={{ marginBottom: 30 }}>
        <p>Player one emoji: {players[0].emoji} </p>
        <p>Player two emoji: {players[1].emoji} </p>
      </div>
      <EmojiGrid
        emojis={emojis}
        gridSize={gridSize}
        onEmojiClick={onEmojiClick}
      />
      {renderStartGameButton()}
    </div>
  );
};
