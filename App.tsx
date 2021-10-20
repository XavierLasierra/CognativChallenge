import React, { Suspense } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecoilRoot } from "recoil";

import Home from "./src/screens/Home/Home";
import RecipeDetail from "./src/screens/RecipeDetail/RecipeDetail";
import Loading from "./src/screens/Loading/Loading";

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
            <Stack.Screen
              name="RecipeDetail"
              component={RecipeDetail}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </Suspense>
    </RecoilRoot>
  );
}
