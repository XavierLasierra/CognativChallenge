import React from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";

import Colors from "../../theme/Colors";
import Metrics from "../../theme/Metrics";

import recommendations from "../../__mocks__/recommendations.mock";
import recipes from "../../__mocks__/recipes.mock";

export default function Home(props) {
  const renderImage = item => {
    let imageUrl = "http://via.placeholder.com/640x360";
    if (item && item.photo) {
      imageUrl = item.photo;
    }
    return <Image source={{ uri: imageUrl }} style={styles.recipeImage} />;
  };
  const renderImageBox = item => {
    let imageUrl = "http://via.placeholder.com/640x360";
    if (item && item.photo) {
      imageUrl = item.photo;
    }
    return <Image source={{ uri: imageUrl }} style={styles.scrollerRecipe} />;
  };

  const handlePress = data => {
    props.navigation.push("Details", data);
  };

  const renderRow = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handlePress(item)}>
        <View style={styles.rowContainer}>
          <View style={styles.imageContainer}>{renderImage(item)}</View>
          <View style={styles.infoContainer}>
            <Text style={styles.categoryRow}>{item.categoryName}</Text>
            <Text style={styles.titleRow}>{item.name}</Text>
            <View style={styles.properties}>
              <View style={styles.cellRow}>
                <Text style={styles.cellText}>{item.duration} minutes</Text>
              </View>
              <View style={styles.cellRow}>
                <Text style={styles.cellText}>{item.complexity}</Text>
              </View>
              <View style={styles.cellRow}>
                <Text style={styles.cellText}>{item.people} people</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const keyExtractor = item => item._id;

  const renderList = () => {
    return (
      <FlatList
        ListHeaderComponent={renderRecommended}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        data={recipes}
        renderItem={renderRow}
      />
    );
  };

  const renderRecommended = () => {
    return (
      <View style={styles.recommendedContainer}>
        <Text style={styles.header}>Recommended</Text>
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scroller}>
          {recommendations.map(item => {
            return (
              <TouchableOpacity
                onPress={() => handlePress(item)}
                key={item._id}>
                <View style={styles.recipeImageBox}>
                  {renderImageBox(item)}
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainScreen}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.navBar}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Recipes</Text>
        </View>
      </View>
      <View style={styles.container}>{renderList()}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  categoryRow: {
    color: Colors.darkGrey,
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "bold",
    letterSpacing: 1,
    lineHeight: 24,
    textAlign: "left",
  },
  cellRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
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
  header: {
    color: Colors.black,
    fontWeight: "bold",
    paddingHorizontal: Metrics.baseSpace,
    paddingVertical: Metrics.smallSpace,
    textAlign: "left",
  },
  imageContainer: {
    height: 128,
  },
  infoContainer: {
    alignItems: "stretch",
    justifyContent: "center",
    paddingHorizontal: Metrics.baseSpace,
    paddingVertical: Metrics.smallSpace,
  },
  mainScreen: {
    backgroundColor: Colors.mainBackground,
    flex: 1,
  },
  navBar: {
    alignItems: "center",
    backgroundColor: Colors.whiteFull,
    height: Metrics.navBarHeight,
    justifyContent: "center",
    marginTop: Metrics.statusBarHeight,
  },
  properties: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  recipeImage: {
    flex: 1,
  },
  recipeImageBox: {
    height: 128,
    width: 208,
  },
  recommendedContainer: {
    alignItems: "stretch",
    justifyContent: "center",
    marginBottom: Metrics.baseSpace,
  },
  rowContainer: {
    alignItems: "stretch",
    backgroundColor: Colors.whiteFull,
    borderRadius: Metrics.borderRadius,
    justifyContent: "flex-start",
    marginBottom: Metrics.baseSpace,
    marginHorizontal: Metrics.baseSpace,
    overflow: "hidden",
  },
  scroller: {
    paddingRight: Metrics.baseSpace,
  },
  scrollerRecipe: {
    alignItems: "center",
    borderRadius: Metrics.borderRadius,
    height: 128,
    justifyContent: "center",
    marginLeft: Metrics.baseSpace,
    overflow: "hidden",
  },
  title: {
    fontWeight: "bold",
  },
  titleRow: {
    color: Colors.black,
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: 0.5,
    lineHeight: 24,
    textAlign: "left",
  },
});
