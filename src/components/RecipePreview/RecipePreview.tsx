import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { IRecipePreviewProps } from "../../types/interfaces";

import placeholderConstants from "../../constants/placeholder.constants";

import styles from "./recipePreview.styles";

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
        <View style={styles.infoContainer}>
          <Text style={styles.categoryRow}>{recipe.categoryName}</Text>
          <Text style={styles.titleRow}>{recipe.name}</Text>
          <View style={styles.properties}>
            <View style={styles.cellRow}>
              <Text style={styles.cellText}>{recipe.duration} minutes</Text>
            </View>
            <View style={styles.cellRow}>
              <Text style={styles.cellText}>{recipe.complexity}</Text>
            </View>
            <View style={styles.cellRow}>
              <Text style={styles.cellText}>{recipe.people} people</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
