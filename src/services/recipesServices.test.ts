import axios from "axios";

import { getRecipes } from "./recipes.services";
import recipesMock from "../__mocks__/recipes.mock";
import { waitFor } from "@testing-library/react-native";

jest.mock("axios");

describe("Given a getRecipes function", () => {
  describe("When it is triggered", () => {
    describe("And axios.get resolves with recipes data", () => {
      test("Then should return the recipes it resolves with", async () => {
        const resolvedData = {
          data: {
            data: recipesMock,
          },
        };
        (axios.get as jest.Mock).mockResolvedValue(resolvedData);

        const result = await getRecipes();

        expect(result).toEqual(recipesMock);
      });
    });

    describe("And axios.get rejectes", () => {
      test("Then should return an empty array", () => {
        (axios.get as jest.Mock).mockRejectedValue(new Error());

        waitFor(() =>
          expect(async () => {
            await getRecipes();
          }).toThrow(),
        );
      });
    });
  });
});
