import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Landing from "../landing/landing";
import Contacts from "../contacts/contacts";
import AddContact from "../addContact/addContact";
import EditContact from "../editContact/editContact";

class Nav extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <div>
                  <div className="d-inline-flex">
                    <Link className="nav-item nav-link" to={"/"}>
                      Home
                    </Link>
                    <Link className="nav-item nav-link" to={"/add-contact"}>
                      Add Contact
                    </Link>
                    <Link className="nav-item nav-link" to={"/contacts"}>
                      All Contacts
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <Route path="/" exact component={Landing} />
          <Route path="/contacts" exact component={Contacts} />
          <Route path="/add-contact" exact component={AddContact} />
          <Route path="/edit-contact" exact component={EditContact} />
        </div>
      </Router>
    );
  }
}

export default Nav;
