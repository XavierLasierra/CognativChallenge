import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";

import Colors from "../../theme/Colors";
import Metrics from "../../theme/Metrics";

import recipes from "../../__mocks__/recipes.mock";

const [data] = recipes;

export default class RecipeDetails extends Component {
  render() {
    let imageUrl = "http://via.placeholder.com/640x360";
    if (data && data.photo) {
      imageUrl = data.photo;
    }

    return (
      <SafeAreaView style={styles.mainScreen}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: imageUrl }} style={styles.recipeImage} />
              <View style={styles.darkener} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.category}>{data.categoryName}</Text>
              <Text style={styles.title}>{data.name}</Text>
              <View style={styles.properties}>
                <View style={styles.cell}>
                  <Text style={styles.cellText}>{data.duration} minutes</Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.cellText}>{data.complexity}</Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.cellText}>{data.people} people</Text>
                </View>
              </View>
            </View>
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
}

const styles = StyleSheet.create({
  category: {
    color: Colors.darkGrey,
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "bold",
    letterSpacing: 1,
    lineHeight: 24,
    textAlign: "center",
  },
  cell: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginRight: Metrics.smallSpace,
  },
  cellText: {
    color: Colors.mediumGrey,
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "300",
    letterSpacing: 0.5,
    lineHeight: 24,
  },
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
  properties: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  recipeImage: {
    height: 192,
  },
  title: {
    fontWeight: "bold",
  },
  title: {
    color: Colors.black,
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: 0.5,
    lineHeight: 24,
    textAlign: "center",
  },
});
