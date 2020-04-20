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

  render() {
    const { emojis, players, gridSize } = this.state;
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <StartPage emojis={emojis} players={players} gridSize={gridSize} />
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
