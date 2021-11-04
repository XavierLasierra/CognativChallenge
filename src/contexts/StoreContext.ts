import { createContext } from "react";
import RecipesStore from "../mobx/recipesStore";
import store from "../mobx";

interface IContext {
  recipesStore: RecipesStore;
}

const StoreContext = createContext<IContext>(store);

export default StoreContext;
