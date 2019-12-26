import React, { Component } from "react";
import "./menu.css";

export default class Menu extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div>
        <button className="fas fa-bars menu" onClick={this.showMenu}></button>

        {this.state.showMenu ? (
          <div
            className="menu-content"
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            <button className="fas fa-plus-circle">
              <p> Add</p>
            </button>
            <button className="fas fa-search">
              {" "}
              <p>Search</p>
            </button>
            <button className="fas fa-sort-amount-up">
              <p>Filter</p>
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}
