import { makeAutoObservable } from "mobx";
import {
  getRecipe,
  getRecipes,
  getRecommendedRecipes,
} from "../../services/recipes.services";
import { IRecipe } from "../../types/interfaces";

class RecipesStore {
  recipes: IRecipe[] = [];
  recommendations: IRecipe[] = [];
  currentRecipe: IRecipe | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setRecipes = (recipes: IRecipe[]) => {
    this.recipes = recipes;
  };

  setRecommendations = (recommendations: IRecipe[]) => {
    this.recommendations = recommendations;
  };

  setCurrentRecipe = (currentRecipe: IRecipe | null) => {
    this.currentRecipe = currentRecipe;
  };

  fetchRecipes = async () => {
    try {
      const recipes = await getRecipes();
      this.setRecipes(recipes);
    } catch (error) {
      this.setRecipes([]);
    }
  };

  fetchRecommendedRecipes = async () => {
    try {
      const recommendations = await getRecommendedRecipes();
      this.setRecommendations(recommendations);
    } catch (error) {
      this.setRecommendations([]);
    }
  };

  fetchRecipe = async (recipeId: string) => {
    try {
      const currentRecipe = await getRecipe(recipeId);
      this.setCurrentRecipe(currentRecipe);
    } catch (error) {
      this.setCurrentRecipe(null);
    }
  };
}

export default RecipesStore;
