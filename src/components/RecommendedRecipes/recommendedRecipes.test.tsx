import React from "react";
import RecommendedRecipes from "./RecommendedRecipes";
import { render, fireEvent, RenderAPI } from "../../utils/test.utils";
import recipesMock from "../../__mocks__/recipes.mock";
import { IRecipe } from "../../types/interfaces";

describe("Given a RecommendedRecipes component", () => {
  describe("When it is rendered", () => {
    let screen: RenderAPI;
    let actionOnPress: () => void;
    let recommendations: IRecipe[];
    beforeEach(() => {
      actionOnPress = jest.fn();
      recommendations = recipesMock.slice(0, 2);

      screen = render(
        <RecommendedRecipes
          recommendations={recommendations}
          actionOnPress={actionOnPress}
        />,
      );
    });

    test("Then should match the snapshot", () => {
      expect(screen).toMatchSnapshot();
    });

    describe("And you click on one of the recipies recommendations", () => {
      test("Then actionOnPress should have been called with the id of the clicked recipe", () => {
        const id = recommendations[0]._id;
        const button = screen.getByTestId(`recommended-${id}`);
        fireEvent(button, "press");

        expect(actionOnPress).toHaveBeenCalledWith(id);
      });
    });
  });
});