import React, { useEffect } from "react";
import { Text, View, FlatList, SafeAreaView, StatusBar } from "react-native";
import { IHomeProps, IRecipeProp } from "../../types/interfaces";
import { observer } from "mobx-react-lite";

import RecipePreview from "../../components/RecipePreview/RecipePreview";
import RecommendedRecipes from "../../components/RecommendedRecipes/RecommendedRecipes";

import styles from "./home.styles";
import AppStyles from "../../theme/AppStyles";

import { recipesStore } from "../../mobx";

const Home = observer(({ navigation }: IHomeProps) => {
  useEffect(() => {
    recipesStore.fetchRecipes();
    recipesStore.fetchRecommendedRecipes();
  }, []);
  const { recipes, recommendations }: any = recipesStore;

  const handlePress = (recipeId: string): void => {
    navigation.push("RecipeDetail", { recipeId });
  };

  const renderRecommended = () => {
    return (
      <RecommendedRecipes
        recommendations={recommendations}
        actionOnPress={handlePress}
      />
    );
  };

  const renderRow = ({ item }: IRecipeProp) => {
    return <RecipePreview recipe={item} actionOnPress={handlePress} />;
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
});

export default Home;
