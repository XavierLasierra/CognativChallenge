import React from "react";
import { RecoilRoot } from "recoil";
import { render } from "@testing-library/react-native";

import RecipeDetail from "./RecipeDetail";

import { getRecipes } from "../../services/recipes.services";
import recipesMock from "../../__mocks__/recipes.mock";

jest.mock("../../services/recipes.services");

describe("Given a RecipeDetails component", () => {
  describe("When it is rendered", () => {
    test("Then should match the snapshot", () => {
      (getRecipes as jest.Mock).mockReturnValue(recipesMock);
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
        <RecoilRoot>
          <RecipeDetail navigation={navigation} route={route} />
        </RecoilRoot>,
      );

      expect(screen).toMatchSnapshot();
    });
  });
});
