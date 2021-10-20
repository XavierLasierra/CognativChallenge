import { atom, selector } from "recoil";
import { getRecipes } from "../../services/recipes.services";
import { IRecipe } from "../../types/interfaces";

export default atom<IRecipe[]>({
  key: "Recipes",
  default: selector({
    key: "Recipes/Default",
    get: () => getRecipes(),
  }),
});
