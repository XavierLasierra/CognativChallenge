import React from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import { IHomeProps, IRecipe, IRecipeProp } from "../../types/interfaces";

import placeholder from "../../constants/placeholder.constants";
import recommendations from "../../__mocks__/recommendations.mock";
import recipes from "../../__mocks__/recipes.mock";
import RecipePreview from "../../components/RecipePreview/RecipePreview";

import styles from "./home.styles";
import AppStyles from "../../theme/AppStyles";

export default function Home({ navigation }: IHomeProps) {
  const handlePress = (recipe: IRecipe): void => {
    navigation.push("Details", recipe);
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
          {recommendations.map((item: IRecipe) => {
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

  const renderRow = ({ item }: IRecipeProp) => {
    return (
      <RecipePreview recipe={item} actionOnPress={handlePress}></RecipePreview>
    );
  };

  const renderList = (
    <FlatList
      ListHeaderComponent={renderRecommended}
      showsVerticalScrollIndicator={false}
      keyExtractor={({ _id }) => _id}
      data={recipes}
      renderItem={renderRow}
    />
  );

  return (
    <SafeAreaView style={AppStyles.screen.mainScreen}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.navBar}>
        <View>
          <Text style={styles.title}>Recipes</Text>
        </View>
      </View>
      <View style={AppStyles.container}>{renderList}</View>
    </SafeAreaView>
  );
}
