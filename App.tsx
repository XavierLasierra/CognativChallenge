import React, { Suspense } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecoilRoot } from "recoil";

import Home from "./src/screens/home/Home";
import Details from "./src/screens/recipes/Details";
import Loading from "./src/screens/loading/Loading";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen name="Details" component={Details}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </Suspense>
    </RecoilRoot>
  );
}
