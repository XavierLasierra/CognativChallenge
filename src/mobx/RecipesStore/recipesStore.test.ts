import {
  getRecipes,
  getRecommendedRecipes,
} from "../../services/recipes.services";
import recipesMock from "../../__mocks__/recipes.mock";
import RecipesStore from "./RecipesStore";

jest.mock("../../services/recipes.services");

describe("RecipesStore", () => {
  describe("calling fetchRecipes", () => {
    describe("And getRecipes resolves", () => {
      test("this.recipes should have length > 0", async () => {
        const recipesStore = new RecipesStore();
        (getRecipes as jest.Mock).mockRejectedValue(new Error());

        await recipesStore.fetchRecipes();

        expect(recipesStore.recipes).toEqual([]);
      });
    });
  });
  describe("calling fetchRecommendedRecipes", () => {
    describe("And getRecommendedRecipes resolves", () => {
      test("this.recipes should have length 2", async () => {
        const recipesStore = new RecipesStore();
        (getRecommendedRecipes as jest.Mock).mockResolvedValue(
          recipesMock.slice(0, 2),
        );

        await recipesStore.fetchRecommendedRecipes();

        expect(recipesStore.recommendations).toHaveLength(2);
      });
    });
  });
});
