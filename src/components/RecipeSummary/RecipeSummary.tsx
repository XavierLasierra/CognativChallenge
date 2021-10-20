import React from "react";
import { Text, View } from "react-native";
import { IRecipeSummaryProps } from "../../types/interfaces";

import styles from "./recipeSummary.styles";

export default function RecipeSummary({
  recipe,
  alignCenter,
}: IRecipeSummaryProps) {
  return (
    <View style={styles.infoContainer}>
      <Text style={alignCenter ? styles.category : styles.categoryRow}>
        {recipe.categoryName}
      </Text>
      <Text style={alignCenter ? styles.title : styles.titleRow}>
        {recipe.name}
      </Text>
      <View style={styles.properties}>
        <View style={alignCenter ? styles.cell : styles.cellRow}>
          <Text style={styles.cellText}>{recipe.duration} minutes</Text>
        </View>
        <View style={alignCenter ? styles.cell : styles.cellRow}>
          <Text style={styles.cellText}>{recipe.complexity}</Text>
        </View>
        <View style={alignCenter ? styles.cell : styles.cellRow}>
          <Text style={styles.cellText}>{recipe.people} people</Text>
        </View>
      </View>
    </View>
  );
}
