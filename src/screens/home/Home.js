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

import placeholder from "../../constants/placeholder.constants";
import recommendations from "../../__mocks__/recommendations.mock";
import recipes from "../../__mocks__/recipes.mock";
import RecipePreview from "../../components/RecipePreview/RecipePreview";

export default function Home(props) {
  const handlePress = data => {
    props.navigation.push("Details", data);
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
  };

  const renderRow = ({ item }) => {
    return (
      <RecipePreview recipe={item} actionOnPress={handlePress}></RecipePreview>
    );
  };

  const renderList = () => {
    return (
      <FlatList
        ListHeaderComponent={renderRecommended}
        showsVerticalScrollIndicator={false}
        keyExtractor={({ _id }) => _id}
        data={recipes}
        renderItem={renderRow}
      />
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
  recipeImageBox: {
    height: 128,
    width: 208,
  },
  recommendedContainer: {
    alignItems: "stretch",
    justifyContent: "center",
    marginBottom: Metrics.baseSpace,
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
});
