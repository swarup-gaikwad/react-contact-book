import React from "react";
import { shallow } from "enzyme";
import EditContact from "./editContact";

describe("Contacts", () => {
  it("should render correctly", () => {
    const location = {
      state: {
        _id: 26251816,
        fName: "Swarup",
        lName: "Gaikwad",
        mobile: "9762565456",
        empId: "wmp12"
      }
    };
    const component = shallow(<EditContact location={location} />);
  });
  it("should render initial layout", () => {
    // when
    const location = {
      state: {
        _id: 26251816,
        fName: "Swarup",
        lName: "Gaikwad",
        mobile: "9762565456",
        empId: "wmp12"
      }
    };
    const component = shallow(<EditContact location={location} />);
    // then
    expect(component.getElements()).toMatchSnapshot();
  });
});
