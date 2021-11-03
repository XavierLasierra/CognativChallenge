import React, { useEffect } from "react";
import { Text, View, FlatList, SafeAreaView, StatusBar } from "react-native";
import { IHomeProps, IRecipeProp } from "../../types/interfaces";
import { observer } from "mobx-react-lite";

import RecipePreview from "../../components/RecipePreview/RecipePreview";
import RecommendedRecipes from "../../components/RecommendedRecipes/RecommendedRecipes";

import styles from "./home.styles";
import AppStyles from "../../theme/AppStyles";

import useStore from "../../hooks/useStore";

const Home = observer(({ navigation }: IHomeProps) => {
  const { recipes, recommendations, fetchRecipes, fetchRecommendedRecipes } =
    useStore();

  useEffect(() => {
    fetchRecipes();
    fetchRecommendedRecipes();
  }, []);

  const handlePress = (recipeId: string): void => {
    navigation.push("RecipeDetail", { recipeId });
  };

  const renderRow = ({ item }: IRecipeProp) => {
    return <RecipePreview recipe={item} actionOnPress={handlePress} />;
  };

  return (
    <SafeAreaView style={AppStyles.screen.mainScreen}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.navBar}>
        <View>
          <Text style={styles.title}>Recipes</Text>
        </View>
      </View>
      <View style={AppStyles.container}>
        <FlatList
          ListHeaderComponent={
            <RecommendedRecipes
              recommendations={recommendations}
              actionOnPress={handlePress}
            />
          }
          showsVerticalScrollIndicator={false}
          keyExtractor={({ _id }) => _id}
          data={recipes}
          renderItem={renderRow}
        />
      </View>
    </SafeAreaView>
  );
});

export default Home;
