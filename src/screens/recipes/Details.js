import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import RecipeSummary from "../../components/RecipeSummary/RecipeSummary";

import placeholder from "../../constants/placeholder.constants.js";

import Colors from "../../theme/Colors";
import Metrics from "../../theme/Metrics";

export default function RecipeDetails({ route: { params: data } }) {
  return (
    <SafeAreaView style={styles.mainScreen}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: data?.photo || placeholder.defaultImageUrl }}
              style={styles.recipeImage}
            />
            <View style={styles.darkener} />
          </View>
          <RecipeSummary recipe={data} alignCenter />
          <View style={styles.infoBox}>
            <Text style={styles.header}>Ingredients</Text>
            <Text style={styles.description}>{data.ingredients}</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.header}>Info</Text>
            <Text style={styles.description}>{data.description}</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    backgroundColor: Colors.mainBackground,
    flex: 1,
    justifyContent: "flex-start",
  },
  darkener: {
    backgroundColor: Colors.black30,
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 5,
  },
  description: {
    color: Colors.darkGrey,
    fontSize: 14,
    lineHeight: 24,
  },
  header: {
    color: Colors.black,
    fontSize: 14,
    lineHeight: 24,
    textAlign: "center",
  },
  imageContainer: {},
  infoBox: {
    alignItems: "stretch",
    alignSelf: "stretch",
    justifyContent: "center",
    paddingHorizontal: Metrics.baseSpace,
    paddingVertical: Metrics.smallSpace,
  },
  mainScreen: {
    backgroundColor: Colors.mainBackground,
    flex: 1,
  },
  recipeImage: {
    height: 192,
  },
});
