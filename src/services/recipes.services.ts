import axios from "axios";
import { API_BASE_URL } from "@env";

import { IRecipe } from "../types/interfaces";

export async function getRecipes(): Promise<IRecipe[] | undefined> {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/recipes`);
    const { data: recipes } = data;
    return recipes;
  } catch (error) {
    //TODO
  }
}
