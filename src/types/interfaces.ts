interface IRecipe {
  _id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  duration: number;
  complexity: string;
  people: number;
  recommended: number;
  ingredients: string;
  description: string;
  photo?: string;
}

export interface IRecipePreviewProps {
  recipe: IRecipe;
  actionOnPress: (recipe: IRecipe) => void;
}
