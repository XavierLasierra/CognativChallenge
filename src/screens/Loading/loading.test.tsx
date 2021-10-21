import React from "react";
import Loading from "./Loading";
import { render } from "../../utils/test.utils";

describe("Given a Home component", () => {
  describe("When it is rendered", () => {
    test("Then should render an Activity Indicator", () => {
      const screen = render(<Loading />);
      const activityIndicator = screen.getByTestId("activity-indicator");

      expect(activityIndicator).not.toBe(null);
    });
  });
});
