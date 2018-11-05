import React, { Component } from "react";
import axios from "axios";

class Contacts extends Component {
  state = {
    hasContacts: true,
    contacts: []
  };
  componentDidMount() {
    axios.get(`http://localhost:8080/contacts`).then(res => {
      this.setState({
        hasContacts: res.data.hasContacts,
        contacts: res.data.contacts
      });
    });
  }
  deleteContact = event => {
    event.preventDefault();
    axios
      .delete(`http://localhost:8080/contact/delete/${event.target.dataset.id}`)
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          this.setState({
            hasContacts: res.data.hasContacts,
            contacts: res.data.contacts
          });
        }
      });
  };
  editContact = event => {
    event.preventDefault();
    const contact = this.state.contacts.find(item => {
      return item._id === event.target.dataset.id;
    });
    this.props.history.push({
      pathname: "/edit-contact",
      state: {
        id: event.target.dataset.id,
        fName: contact.fName,
        lName: contact.lName,
        mobile: contact.mobile,
        empId: contact.empId
      }
    });
  };
  render() {
    let contacts = this.state.contacts.map(contact => {
      return (
        <tr key={contact._id}>
          <td>{contact.fName}</td>
          <td>{contact.lName}</td>
          <td>
            <div className={`${contact._id}-display-mobile`}>
              {contact.mobile}
            </div>
          </td>
          <td>{contact.empId} </td>
          <td>
            <button
              className="btn btn-primary btn-sm"
              data-id={contact._id}
              onClick={this.editContact}
            >
              <i className="fas fa-user-edit" /> Edit
            </button>
            <button
              className="btn btn-danger btn-sm deleteContact"
              data-id={contact._id}
              onClick={this.deleteContact}
            >
              <i className="fas fa-user-times" /> Delete
            </button>
          </td>
        </tr>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            {this.state.hasContacts ? (
              <h2 className="font-weight-normal">No contact found</h2>
            ) : (
              <div>
                <h2 className="font-weight-normal">Your Contacts:</h2>
                <div className=" table-responsive">
                  <table className="table table-bordered table-hover table-sm">
                    <thead className="thead-light">
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Mobile Number</th>
                        <th>Emp Id</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>{contacts}</tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
