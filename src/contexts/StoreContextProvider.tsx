import React, { ReactChild } from "react";
import RecipesStore from "../mobx/RecipesStore/RecipesStore";
import StoreContext from "./StoreContext";

interface IStore {
  recipesStore: RecipesStore;
}

interface IStoreContextProvider {
  store: IStore;
  children: ReactChild;
}

const StoreContextProvider = ({ store, children }: IStoreContextProvider) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreContextProvider;
