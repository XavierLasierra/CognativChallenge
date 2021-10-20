import axios from "axios";
import { API_BASE_URL } from "@env";
import { IAxiosRecipeData, IRecipe } from "../types/interfaces";

export async function getRecipes(): Promise<IRecipe[]> {
  try {
    const { data }: IAxiosRecipeData = await axios.get(
      `${API_BASE_URL}/recipes`,
    );
    const { data: recipes } = data;
    return recipes || [];
  } catch (error) {
    return [];
  }
}

export async function getRecommendedRecipes(): Promise<IRecipe[]> {
  try {
    const { data }: IAxiosRecipeData = await axios.get(
      `${API_BASE_URL}/recipes?recommended=1`,
    );
    const { data: recommendedRecipes } = data;
    return recommendedRecipes || [];
  } catch (error) {
    return [];
  }
}
