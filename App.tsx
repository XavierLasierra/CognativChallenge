import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigation from "./src/navigation/AppNavigation";
import StoreContextProvider from "./src/contexts/StoreContextProvider";

export default function App() {
  return (
    <StoreContextProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </StoreContextProvider>
  );
}
