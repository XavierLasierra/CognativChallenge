import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { IRecipePreviewProps } from "../../types/interfaces";

import RecipeSummary from "../RecipeSummary/RecipeSummary";

import placeholderConstants from "../../constants/placeholder.constants";

import styles from "./recipePreview.styles";

export default function RecipePreview({
  recipe,
  actionOnPress,
}: IRecipePreviewProps) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={() => actionOnPress(recipe._id)}>
      <View style={styles.rowContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: recipe?.photo || placeholderConstants.defaultImageUrl,
            }}
            style={styles.recipeImage}
          />
        </View>
        <RecipeSummary recipe={recipe} />
      </View>
    </TouchableOpacity>
  );
}
