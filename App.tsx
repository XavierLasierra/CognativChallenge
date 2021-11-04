import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigation from "./src/navigation/AppNavigation";
import StoreContextProvider from "./src/contexts/StoreContextProvider";

import store from "./src/mobx";

export default function App() {
  return (
    <StoreContextProvider store={store}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </StoreContextProvider>
  );
}
