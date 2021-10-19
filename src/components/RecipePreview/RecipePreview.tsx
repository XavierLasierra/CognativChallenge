import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { IRecipePreviewProps } from "../../types/interfaces";

import placeholderConstants from "../../constants/placeholder.constants";

import styles from "./recipePreview.styles";
import RecipeSummary from "../RecipeSummary/RecipeSummary";

export default function RecipePreview({
  recipe,
  actionOnPress,
}: IRecipePreviewProps) {
  return (
    <TouchableOpacity onPress={() => actionOnPress(recipe)}>
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
