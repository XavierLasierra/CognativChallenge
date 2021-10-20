export interface IRecipe {
  _id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  duration: number;
  complexity: string;
  favorite?: number;
  people: number;
  recommended?: number;
  ingredients: string;
  description: string;
  photo?: string;
}

export interface IRecipePreviewProps {
  recipe: IRecipe;
  actionOnPress: (recipe: IRecipe) => void;
}

export interface IRecipeSummaryProps {
  recipe: IRecipe;
  alignCenter?: boolean;
}

interface IRoute {
  params: IRecipe;
}
export interface IRecipeDetailsProps {
  route: IRoute;
}

interface INavigation {
  push: (path: string, recipe: IRecipe) => void;
}

export interface IHomeProps {
  navigation: INavigation;
}

export interface IRecipeProp {
  item: IRecipe;
}
