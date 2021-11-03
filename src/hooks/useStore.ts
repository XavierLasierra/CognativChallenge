import Store from "../mobx";

const useStore = () => {
  const {
    recipesStore: {
      recipes,
      recommendations,
      currentRecipe,
      fetchRecipes,
      fetchRecommendedRecipes,
      fetchRecipe,
      clearRecipe,
    },
  } = Store;

  return {
    recipes,
    recommendations,
    currentRecipe,
    fetchRecipes,
    fetchRecommendedRecipes,
    fetchRecipe,
    clearRecipe,
  };
};

export default useStore;
