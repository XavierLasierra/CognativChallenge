import { action, makeAutoObservable } from "mobx";
import { getRecipes } from "../services/recipes.services";
import { IRecipe } from "../types/interfaces";

class RecipesStore {
  recipes: IRecipe[] = [];
  recommended: IRecipe[] = [];
  currentRecipe: IRecipe | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchRecipes = action(async () => {
    try {
      this.recipes = await getRecipes();
    } catch (error) {
      this.recipes = [];
    }
  });
}

export default RecipesStore;
