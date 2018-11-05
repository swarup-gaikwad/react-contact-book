import React from "react";
import { shallow } from "enzyme";
import Navigation from "./navigation";

describe("Navigation", () => {
  it("should render correctly", () => {
    const component = shallow(<Navigation />);
  });
  it("should render initial layout", () => {
    // when
    const component = shallow(<Navigation />);
    // then
    expect(component.getElements()).toMatchSnapshot();
  });
});
