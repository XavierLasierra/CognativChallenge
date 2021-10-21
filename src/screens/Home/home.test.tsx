import React from "react";
import Home from "./Home";
import { render } from "@testing-library/react-native";

import {
  getRecipes,
  getRecommendedRecipes,
} from "../../services/recipes.services";
import recipesMock from "../../__mocks__/recipes.mock";
import { RecoilRoot } from "recoil";

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

      const screen = render(
        <RecoilRoot>
          <Home navigation={navigation} />
        </RecoilRoot>,
      );

      expect(screen).toMatchSnapshot();
    });
  });
});
