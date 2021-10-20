import { selectorFamily } from "recoil";
import recipes from "./atom";

export default selectorFamily({
  key: "RecipeById",
  get:
    recipeId =>
    ({ get }) => {
      return get(recipes).find(({ _id }) => _id === recipeId);
    },
});
