import { atom, selector } from "recoil";
import { IRecipe } from "../../types/interfaces";

import { getRecommendedRecipes } from "../../services/recipes.services";

export default atom<IRecipe[]>({
  key: "RecommendedRecipes",
  default: selector({
    key: "RecommendedRecipes/Default",
    get: () => getRecommendedRecipes(),
  }),
});
