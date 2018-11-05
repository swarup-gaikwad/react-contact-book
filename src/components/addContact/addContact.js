import React, { Component } from "react";
import axios from "axios";

class AddContact extends Component {
  constructor() {
    super();
    this.state = {
      fName: "",
      lName: "",
      mobile: "",
      empId: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();

    const { fName, lName, mobile, empId } = this.state;
    console.log(this.state);
    axios
      .post(`http://localhost:8080/contact/addContact`, {
        fName,
        lName,
        mobile,
        empId
      })
      .then(res => {
        this.props.history.push("contacts");
      });
  };
  render() {
    const { fName, lName, mobile, empId } = this.state;
    return (
      <div className="container">
        <h2>Add Contact</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="fName">First Name</label>
            <input
              type="text"
              className="form-control"
              name="fName"
              placeholder="Enter First Name"
              value={fName}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lName">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lName"
              placeholder="Enter Last Name"
              value={lName}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="text"
              className="form-control"
              name="mobile"
              placeholder="Enter Mobile Number"
              pattern="[0-9]{10}"
              title="Please enter valid 10 digit mobile number"
              value={mobile}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="empId">Employee Id</label>
            <input
              type="text"
              className="form-control"
              name="empId"
              placeholder="Enter Employee Id"
              value={empId}
              onChange={this.onChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
