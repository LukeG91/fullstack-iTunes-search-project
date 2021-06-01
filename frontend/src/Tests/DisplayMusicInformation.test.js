import React from "react";
import renderer from "react-test-renderer";
import Songs from "../Components/Songs";

/* Writing a snapshot test to check if the Songs component renders correctly prior to 
   information being pulled from the API.*/

it("Displays the web page correctly before there is music information to display.", () => {
  const tree = renderer.create(<Songs />).toJSON();
  expect(tree).toMatchSnapshot();
});
