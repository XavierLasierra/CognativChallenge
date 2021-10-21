import React, { Suspense } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RecoilRoot } from "recoil";

import Loading from "./src/screens/Loading/Loading";
import AppNavigation from "./src/navigation/AppNavigation";

export default function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </Suspense>
    </RecoilRoot>
  );
}
