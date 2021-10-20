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
  actionOnPress: (recipe: string) => void;
}

export interface IRecipeSummaryProps {
  recipe: IRecipe;
  alignCenter?: boolean;
}

interface IParams {
  recipeId: string;
}
interface IRoute {
  params: IParams;
}
export interface IRecipeDetailsProps {
  route: IRoute;
  navigation: INavigation;
}

interface INavigation {
  push: (path: string, params: IParams) => void;
  pop: () => void;
}

export interface IHomeProps {
  navigation: INavigation;
}

export interface IRecipeProp {
  item: IRecipe;
}

export interface IBackButtonProps {
  actionOnPress: () => void;
}

interface IRecipeData {
  data: IRecipe[];
}

export interface IAxiosRecipeData {
  data: IRecipeData;
}
