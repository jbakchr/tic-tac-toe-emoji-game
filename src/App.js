import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar/NavBar";
import { StartPage } from "./pages/StartPage";
import GamePage from "./pages/GamePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <StartPage />
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
