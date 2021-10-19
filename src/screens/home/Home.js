import React, { Component } from "react";
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

class ExploreScreen extends Component {
  constructor(props) {
    super(props);
  }
  renderImage = item => {
    let imageUrl = "http://via.placeholder.com/640x360";
    if (item && item.photo) {
      imageUrl = item.photo;
    }
    return <Image source={{ uri: imageUrl }} style={styles.recipeImage} />;
  };
  renderImageBox = item => {
    let imageUrl = "http://via.placeholder.com/640x360";
    if (item && item.photo) {
      imageUrl = item.photo;
    }
    return <Image source={{ uri: imageUrl }} style={styles.scrollerRecipe} />;
  };

  onPress = () => {
    this.props.navigation.push("Details");
  };

  renderRow = ({ item }) => {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.rowContainer}>
          <View style={styles.imageContainer}>{this.renderImage(item)}</View>
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

  keyExtractor = item => item._id;

  renderList = () => {
    return (
      <FlatList
        ListHeaderComponent={this.renderRecommended}
        showsVerticalScrollIndicator={false}
        keyExtractor={this.keyExtractor}
        data={recipes}
        renderItem={this.renderRow}
      />
    );
  };

  renderRecommended = () => {
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
              <TouchableOpacity onPress={this.onPress}>
                <View style={styles.recipeImageBox}>
                  {this.renderImageBox(item)}
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.mainScreen}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.navBar}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Recipes</Text>
          </View>
        </View>
        <View style={styles.container}>{this.renderList()}</View>
      </SafeAreaView>
    );
  }
}
export default ExploreScreen;

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
