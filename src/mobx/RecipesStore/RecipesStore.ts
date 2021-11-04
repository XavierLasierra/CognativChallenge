import { makeAutoObservable, runInAction } from "mobx";
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

  fetchRecipes = async () => {
    try {
      const recipes = await getRecipes();
      runInAction(() => (this.recipes = recipes));
    } catch (error) {
      runInAction(() => (this.recipes = []));
    }
  };

  fetchRecommendedRecipes = async () => {
    try {
      const recommendations = await getRecommendedRecipes();
      runInAction(() => (this.recommendations = recommendations));
    } catch (error) {
      this.recommendations = [];
    }
  };

  fetchRecipe = async (recipeId: string) => {
    try {
      const currentRecipe = await getRecipe(recipeId);
      runInAction(() => (this.currentRecipe = currentRecipe));
    } catch (error) {
      runInAction(() => (this.currentRecipe = null));
    }
  };

  clearRecipe = () => {
    this.currentRecipe = null;
  };
}

export default RecipesStore;
