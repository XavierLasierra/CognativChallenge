import React from "react";
import { render } from "@testing-library/react-native";

import App from "./App";

import {
  getRecipes,
  getRecommendedRecipes,
} from "./src/services/recipes.services";
import recipesMock from "./src/__mocks__/recipes.mock";

jest.mock("./src/services/recipes.services");
jest.useFakeTimers();

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    describe("And recipes data is resolved", () => {
      test("Then should render a Text with Recipes", () => {
        (getRecipes as jest.Mock).mockReturnValue(recipesMock);
        (getRecommendedRecipes as jest.Mock).mockReturnValue(
          recipesMock.slice(0, 2),
        );
        const screen = render(<App />);

        const recipeTitle = screen.getByText("Recipes");

        expect(recipeTitle).not.toBe(null);
      });
    });
  });
});
