import { action, makeAutoObservable } from "mobx";
import {
  getRecipes,
  getRecommendedRecipes,
} from "../services/recipes.services";
import { IRecipe } from "../types/interfaces";

class RecipesStore {
  recipes: IRecipe[] = [];
  recommendations: IRecipe[] = [];
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

  fetchRecommendedRecipes = action(async () => {
    try {
      this.recommendations = await getRecommendedRecipes();
    } catch (error) {
      this.recommendations = [];
    }
  });
}

export default RecipesStore;
