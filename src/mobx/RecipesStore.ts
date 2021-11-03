import { action, computed, flow, makeAutoObservable } from "mobx";
import {
  getRecipe,
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

  fetchRecipes = flow(function* (this: any) {
    try {
      this.recipes = yield getRecipes();
    } catch (error) {
      this.recipes = [];
    }
  });

  fetchRecommendedRecipes = flow(function* (this: any) {
    try {
      this.recommendations = yield getRecommendedRecipes();
    } catch (error) {
      this.recommendations = [];
    }
  });

  fetchRecipe = flow(function* (this: any, recipeId: string) {
    try {
      this.currentRecipe = yield getRecipe(recipeId);
    } catch (error) {
      this.currentRecipe = null;
    }
  });

  clearRecipe = action(() => {
    this.currentRecipe = null;
  });
}

export default RecipesStore;
