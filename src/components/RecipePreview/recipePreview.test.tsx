import React from "react";
import RecipePreview from "./RecipePreview";
import { render, fireEvent, RenderAPI } from "@testing-library/react-native";
import recipesMock from "../../__mocks__/recipes.mock";
import { IRecipe } from "../../types/interfaces";

describe("Given a RecipePreview component", () => {
  describe("When it is rendered", () => {
    let screen: RenderAPI;
    let actionOnPress: () => void;
    let recipe: IRecipe;
    beforeEach(() => {
      actionOnPress = jest.fn();
      [recipe] = recipesMock;

      screen = render(
        <RecipePreview recipe={recipe} actionOnPress={actionOnPress} />,
      );
    });

    test("Then should match the snapshot", () => {
      expect(screen).toMatchSnapshot();
    });

    describe("And you click on it", () => {
      test("Then actionOnPress should have been called with the id of the recipe", () => {
        const id = recipe._id;
        const button = screen.getByRole("button");
        fireEvent(button, "press");

        expect(actionOnPress).toHaveBeenCalledWith(id);
      });
    });
  });
});
