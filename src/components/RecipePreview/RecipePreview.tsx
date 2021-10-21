import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { IRecipePreviewProps } from "../../types/interfaces";

import RecipeSummary from "../RecipeSummary/RecipeSummary";

import placeholder from "../../constants/placeholder.constants";

import styles from "./recipePreview.styles";

export default function RecipePreview({
  recipe,
  actionOnPress,
}: IRecipePreviewProps) {
  const { name, _id: id, photo } = recipe;

  return (
    <TouchableOpacity
      accessible={true}
      accessibilityLabel={`Go to ${name} recipe`}
      accessibilityRole="button"
      onPress={() => actionOnPress(id)}>
      <View style={styles.rowContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: photo || placeholder.defaultImageUrl,
            }}
            style={styles.recipeImage}
          />
        </View>
        <RecipeSummary recipe={recipe} />
      </View>
    </TouchableOpacity>
  );
}
