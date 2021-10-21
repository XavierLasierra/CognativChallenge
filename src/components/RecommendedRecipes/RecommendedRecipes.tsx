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
        {recommendations.map((recommendedRecipe: IRecipe) => {
          return (
            <TouchableOpacity
              accessible={true}
              accessibilityLabel={`Go to ${recommendedRecipe.name} recommended recipe`}
              accessibilityRole={"button"}
              testID={`recommended-${recommendedRecipe._id}`}
              onPress={() => actionOnPress(recommendedRecipe._id)}
              key={recommendedRecipe._id}>
              <View style={styles.recipeImageBox}>
                <Image
                  source={{
                    uri:
                      recommendedRecipe?.photo || placeholder.defaultImageUrl,
                  }}
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
