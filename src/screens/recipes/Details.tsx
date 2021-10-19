import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { IRecipeDetailsProps } from "../../types/interfaces";

import RecipeSummary from "../../components/RecipeSummary/RecipeSummary";

import placeholder from "../../constants/placeholder.constants.js";

import styles from "./details.styles";

export default function RecipeDetails({
  route: { params: recipe },
}: IRecipeDetailsProps) {
  return (
    <SafeAreaView style={styles.mainScreen}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: recipe?.photo || placeholder.defaultImageUrl }}
              style={styles.recipeImage}
            />
            <View style={styles.darkener} />
          </View>
          <RecipeSummary recipe={recipe} alignCenter />
          <View style={styles.infoBox}>
            <Text style={styles.header}>Ingredients</Text>
            <Text style={styles.description}>{recipe.ingredients}</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.header}>Info</Text>
            <Text style={styles.description}>{recipe.description}</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
