import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <h1>Welcome to Contact Book1</h1>
        <div className="row">
          <div className="col-md-6">
            <img src="../../../phone-book.png" alt="conact book" />
          </div>
          <div className="col-md-6">
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
