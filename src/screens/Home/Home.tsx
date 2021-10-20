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
import { useRecoilValue } from "recoil";
import { IHomeProps, IRecipe, IRecipeProp } from "../../types/interfaces";

import RecipePreview from "../../components/RecipePreview/RecipePreview";

import placeholder from "../../constants/placeholder.constants";
import Recipes from "../../recoil/recipes";
import RecommendedRecipes from "../../recoil/recommendedRecipes";

import styles from "./home.styles";
import AppStyles from "../../theme/AppStyles";

export default function Home({ navigation }: IHomeProps) {
  const recipes = useRecoilValue(Recipes);
  const recommendations = useRecoilValue(RecommendedRecipes);

  const handlePress = (recipeId: string): void => {
    navigation.push("RecipeDetail", { recipeId });
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
                onPress={() => handlePress(item._id)}
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
