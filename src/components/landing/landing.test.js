import React from "react";
import { shallow } from "enzyme";
import Landing from "./landing";

describe("Landing", () => {
  it("should render correctly", () => {
    const component = shallow(<Landing />);
  });
  it("should render initial layout", () => {
    // when
    const component = shallow(<Landing />);
    // then
    expect(component.getElements()).toMatchSnapshot();
  });
});
