import React from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import placeholder from "../../constants/placeholder.constants";
import { IRecipe, IRecommendedRecipesProps } from "../../types/interfaces";

import styles from "./recommendedRecipes.styles";

export default function RecommendedRecipes({
  recommendations,
  actionOnPress,
}: IRecommendedRecipesProps) {
  return (
    <View style={styles.recommendedContainer}>
      <Text style={styles.header}>Recommended</Text>
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroller}>
        {recommendations.map((item: IRecipe) => {
          return (
            <TouchableOpacity
              accessibilityRole={"button"}
              testID={`recommended-${item._id}`}
              onPress={() => actionOnPress(item._id)}
              key={item._id}>
              <View style={styles.recipeImageBox}>
                <Image
                  source={{ uri: item?.photo || placeholder.defaultImageUrl }}
                  style={styles.scrollerRecipe}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
