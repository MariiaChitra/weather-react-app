import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default class Navigation extends Component {
  render() {
    return (
      <header>
        <ul className="navigation-items">
          <li className="navigation-item">
            <Link to="/">Tokio</Link>
          </li>
          <li className="navigation-item">
            <Link to="/paris">Paris</Link>
          </li>
          <li className="navigation-item">
            <Link to="/new york">New York</Link>
          </li>
          <li className="navigation-item">
            <Link to="/lviv">Lviv</Link>
          </li>
        </ul>
      </header>
    );
  }
}
