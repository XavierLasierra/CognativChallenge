import axios from "axios";
import { API_BASE_URL } from "@env";
import {
  IAxiosRecipeData,
  IAxiosRecipesData,
  IRecipe,
} from "../types/interfaces";

export async function getRecipes(): Promise<IRecipe[]> {
  try {
    const { data }: IAxiosRecipesData = await axios.get(
      `${API_BASE_URL}/recipes`,
    );

    const { data: recipes } = data;
    return recipes || [];
  } catch (error) {
    throw error;
  }
}

export async function getRecommendedRecipes(): Promise<IRecipe[]> {
  try {
    const { data }: IAxiosRecipesData = await axios.get(
      `${API_BASE_URL}/recipes?recommended=1`,
    );

    const { data: recommendedRecipes } = data;
    return recommendedRecipes || [];
  } catch (error) {
    throw error;
  }
}

export async function getRecipe(recipeId: string): Promise<IRecipe | null> {
  try {
    const { data: recipe }: IAxiosRecipeData = await axios.get(
      `${API_BASE_URL}/recipes/${recipeId}`,
    );
    return recipe || null;
  } catch (error) {
    throw error;
  }
}
