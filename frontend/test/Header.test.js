import React from "react";
import { shallow } from "enzyme";
import Header from "../src/Components/Header";

describe("MyComponent", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Header />);
  });
});
