import { atom, selector } from "recoil";
import { IRecipe } from "../../types/interfaces";

import { getRecipes } from "../../services/recipes.services";

export default atom<IRecipe[]>({
  key: "Recipes",
  default: selector({
    key: "Recipes/Default",
    get: () => getRecipes(),
  }),
});
