import React, { ReactChild } from "react";
import StoreContext from "./StoreContext";
import store from "../mobx";

interface IStoreContextProvider {
  children: ReactChild;
}

const StoreContextProvider = ({ children }: IStoreContextProvider) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreContextProvider;
