import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RecoilRoot } from "recoil";

import AppNavigation from "./src/navigation/AppNavigation";

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </RecoilRoot>
  );
}
