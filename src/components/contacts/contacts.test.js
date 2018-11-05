import React from "react";
import { shallow } from "enzyme";
import Contacts from "./contacts";

describe("Contacts", () => {
  it("should render correctly", () => {
    const component = shallow(<Contacts />);
  });
  it("should render initial layout", () => {
    // when
    const component = shallow(<Contacts />);
    // then
    expect(component.getElements()).toMatchSnapshot();
  });
});
