import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar/NavBar";
import { StartPage } from "./pages/StartPage";
import GamePage from "./pages/GamePage";

class App extends Component {
  state = {
    gridSize: window.innerWidth / 3,
    emojis: [
      { character: "👻", selected: false },
      { character: "💩", selected: false },
      { character: "👽", selected: false },
      { character: "👿", selected: false },
      { character: "💀", selected: false },
      { character: "👹", selected: false },
    ],
    players: [
      { player: 1, emoji: "" },
      { player: 2, emoji: "" },
    ],
  };

  onEmojiClick = (index) => {
    // When an emoji is clicked we first check whether the emoji is already selected
    // If so we just return
    if (
      this.state.emojis[index].selected ||
      (this.state.players[0].emoji && this.state.players[1].emoji)
    ) {
      return;
    }

    // If not we first get a copy the "emojis" array and update the "selected" property
    // for the clicked emoji
    let emojisCopy = [...this.state.emojis];
    emojisCopy[index].selected = true;
    console.log(emojisCopy);

    // Then we get a copy of the "players" property and check whether their "emoji"
    // property have been set for each of them
    let playersCopy = [...this.state.players];

    if (!playersCopy[0].emoji) {
      playersCopy[0].emoji = emojisCopy[index].character;
      this.setState({
        emojis: emojisCopy,
        players: playersCopy,
      });
    } else if (!playersCopy[1].emoji) {
      playersCopy[1].emoji = emojisCopy[index].character;
      this.setState({
        emojis: emojisCopy,
        players: playersCopy,
      });
    }
  };

  render() {
    const { emojis, players, gridSize } = this.state;
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <StartPage
              emojis={emojis}
              players={players}
              gridSize={gridSize}
              onEmojiClick={(index) => this.onEmojiClick(index)}
            />
          </Route>
          <Route path="/game">
            <GamePage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
