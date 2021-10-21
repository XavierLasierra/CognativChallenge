import React from "react";
import Home from "./Home";
import { render } from "../../utils/test.utils";

import {
  getRecipes,
  getRecommendedRecipes,
} from "../../services/recipes.services";
import recipesMock from "../../__mocks__/recipes.mock";

jest.mock("../../services/recipes.services");

describe("Given a Home component", () => {
  describe("When it is rendered", () => {
    test("Then should match the snapshot", () => {
      (getRecipes as jest.Mock).mockReturnValue(recipesMock);
      (getRecommendedRecipes as jest.Mock).mockReturnValue(
        recipesMock.slice(0.2),
      );
      const navigation = {
        pop: jest.fn(),
        push: jest.fn(),
      };

      const screen = render(<Home navigation={navigation} />);

      expect(screen).toMatchSnapshot();
    });
  });
});
