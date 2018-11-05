import React from "react";
import { shallow } from "enzyme";
import AddContact from "./addContact";

describe("AddContact", () => {
  it("should render correctly", () => {
    const component = shallow(<AddContact />);
  });
  it("should render initial layout", () => {
    // when
    const component = shallow(<AddContact />);
    // then
    expect(component.getElements()).toMatchSnapshot();
  });
});
