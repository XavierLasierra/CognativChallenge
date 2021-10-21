import React from "react";
import BackButton from "./BackButton";
import { render, fireEvent, RenderAPI } from "../../utils/test.utils";

describe("Given a BackButton component", () => {
  describe("When it is rendered", () => {
    let actionOnPress: () => void;
    let screen: RenderAPI;
    beforeEach(() => {
      actionOnPress = jest.fn();
      screen = render(<BackButton actionOnPress={actionOnPress} />);
    });

    test("Then should match the snapshot", () => {
      expect(screen).toMatchSnapshot();
    });

    describe("And you press it", () => {
      test("Then actionOnPress should be called", () => {
        const button = screen.getByRole("button");
        fireEvent(button, "press");

        expect(actionOnPress).toHaveBeenCalled();
      });
    });
  });
});
