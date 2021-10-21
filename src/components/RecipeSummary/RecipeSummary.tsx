import React from "react";
import { Text, View } from "react-native";
import { IRecipeSummaryProps } from "../../types/interfaces";

import styles from "./recipeSummary.styles";

export default function RecipeSummary({
  recipe: { name, categoryName, duration, complexity, people },
  alignCenter,
}: IRecipeSummaryProps) {
  return (
    <View style={styles.infoContainer}>
      <Text style={alignCenter ? styles.category : styles.categoryRow}>
        {categoryName}
      </Text>
      <Text style={alignCenter ? styles.title : styles.titleRow}>{name}</Text>
      <View style={styles.properties}>
        <View style={alignCenter ? styles.cell : styles.cellRow}>
          <Text style={styles.cellText}>{duration} minutes</Text>
        </View>
        <View style={alignCenter ? styles.cell : styles.cellRow}>
          <Text style={styles.cellText}>{complexity}</Text>
        </View>
        <View style={alignCenter ? styles.cell : styles.cellRow}>
          <Text style={styles.cellText}>{people} people</Text>
        </View>
      </View>
    </View>
  );
}
