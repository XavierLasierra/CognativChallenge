import React, { Suspense } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/home/Home";
import Details from "./src/screens/recipes/Details";
import { RecoilRoot } from "recoil";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <RecoilRoot>
      <Suspense fallback={<Text>Loading...</Text>}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen name="Details" component={Details}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </Suspense>
    </RecoilRoot>
  );
}
