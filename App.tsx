import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/home/Home";
import Details from "./src/screens/recipes/Details";
import { RecoilRoot } from "recoil";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="Details" component={Details}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
