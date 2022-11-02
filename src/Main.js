import React, { Component } from "react";
import { Route } from "react-router-dom";
import Weather from "./Weather";

export default class App extends Component {
  render() {
    return (
      <div>
        <Route
          exact={true}
          path="/"
          render={() => (
            <div className="App">
              <Weather city="tokio" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/paris"
          render={() => (
            <div className="App">
              <Weather city="Paris" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/new york"
          render={() => (
            <div className="App">
              <Weather city="New York" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/lviv"
          render={() => (
            <div className="App">
              <Weather city="Lviv" />
            </div>
          )}
        />
      </div>
    );
  }
}
