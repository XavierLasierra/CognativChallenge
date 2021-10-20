import axios from "axios";
import { IRecipe } from "../types/interfaces";

export async function getRecipes(): Promise<IRecipe[] | undefined> {
  try {
    const { data } = await axios.get(
      "https://virated-api.herokuapp.com/recipes",
    );
    const { data: recipes } = data;
    return recipes;
  } catch (error) {
    //TODO
  }
}
