import React from "react";
import { render, waitFor } from "@testing-library/react-native";

import RecipeDetail from "./RecipeDetail";

import { getRecipe } from "../../services/recipes.services";
import recipesMock from "../../__mocks__/recipes.mock";

jest.mock("../../services/recipes.services");

describe("Given a RecipeDetails component", () => {
  describe("When it is rendered", () => {
    test("Then should render a recipe with a name Escovitch Fish", async () => {
      (getRecipe as jest.Mock).mockReturnValue(recipesMock[0]);
      const navigation = {
        pop: jest.fn(),
        push: jest.fn(),
      };
      const route = {
        params: {
          recipeId: "52944",
        },
      };

      const screen = render(
        <RecipeDetail navigation={navigation} route={route} />,
      );

      const titleNode = await waitFor(() => screen.getByText("Escovitch Fish"));

      expect(titleNode).not.toBe(null);
    });
  });
});
