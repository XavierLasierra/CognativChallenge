import React from "react";
import BackButton from "./BackButton";
import { render, fireEvent } from "@testing-library/react-native";

describe("Given a BackButton component", () => {
  describe("When it is rendered", () => {
    let actionOnPress: any;
    let screen: any;
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
