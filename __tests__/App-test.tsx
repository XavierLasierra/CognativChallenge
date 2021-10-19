import React from "react";
import App from "../App";
import { render } from "@testing-library/react-native";

describe("Given an App component", () => {
  describe("When it is triggered", () => {
    test("Then should render without crashing", () => {
      render(<App />);
    });
  });
});
