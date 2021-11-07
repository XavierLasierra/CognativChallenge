import React from "react";
import { render, waitFor } from "../../utils/test.utils";

import Home from "./Home";

import recipesMock from "../../__mocks__/recipes.mock";
import store from "../../mobx";

jest.mock("../../services/recipes.services");

describe("Given a Home component", () => {
  describe("When it is rendered", () => {
    test("Then should render a recipe with Oxtail with broad beans as title", () => {
      const navigation = {
        pop: jest.fn(),
        push: jest.fn(),
      };
      const initialStoreState = store;
      initialStoreState.recipesStore.setRecipes(recipesMock);
      initialStoreState.recipesStore.setRecommendations(
        recipesMock.splice(0, 2),
      );
      initialStoreState.recipesStore.fetchRecipes = jest.fn();
      initialStoreState.recipesStore.fetchRecommendedRecipes = jest.fn();

      const screen = render(
        <Home navigation={navigation} />,
        initialStoreState,
      );

      const recipeTitle = waitFor(() =>
        screen.queryByText("Oxtail with broad beans"),
      );
      expect(recipeTitle).not.toBe(null);
    });
  });
});
