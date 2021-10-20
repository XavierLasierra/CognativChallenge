import { atom, selector } from "recoil";
import { getRecommendedRecipes } from "../../services/recipes.services";
import { IRecipe } from "../../types/interfaces";

export default atom<IRecipe[]>({
  key: "RecommendedRecipes",
  default: selector({
    key: "RecommendedRecipes/Default",
    get: () => getRecommendedRecipes(),
  }),
});
