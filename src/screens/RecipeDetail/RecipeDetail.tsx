import React, { useEffect } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { IRecipeDetailsProps } from "../../types/interfaces";

import RecipeSummary from "../../components/RecipeSummary/RecipeSummary";
import BackButton from "../../components/BackButton/BackButton";

import placeholder from "../../constants/placeholder.constants";

import styles from "./recipeDetail.styles";
import { AppStyles } from "../../theme";
import { observer } from "mobx-react-lite";
import useStore from "../../hooks/useStore";

const RecipeDetail = observer(
  ({
    navigation,
    route: {
      params: { recipeId },
    },
  }: IRecipeDetailsProps) => {
    const { recipesStore } = useStore();
    const { currentRecipe: recipe } = recipesStore;

    useEffect(() => {
      recipesStore.fetchRecipe(recipeId);
      return () => {
        recipesStore.clearRecipe();
      };
    }, []);

    const handleNavigateBack = () => {
      navigation.pop();
    };

    return (
      <SafeAreaView style={AppStyles.screen.mainScreen}>
        <BackButton actionOnPress={handleNavigateBack} />
        <StatusBar barStyle="dark-content" />
        <View style={AppStyles.container}>
          {recipe && (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View>
                <Image
                  source={{ uri: recipe?.photo || placeholder.defaultImageUrl }}
                  style={styles.recipeImage}
                />
                <View style={styles.darkener} />
              </View>
              <RecipeSummary recipe={recipe} alignCenter />
              <View style={styles.infoBox}>
                <Text style={styles.header}>Ingredients</Text>
                <Text style={styles.description}>{recipe.ingredients}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.header}>Info</Text>
                <Text style={styles.description}>{recipe.description}</Text>
              </View>
            </ScrollView>
          )}
        </View>
      </SafeAreaView>
    );
  },
);

export default RecipeDetail;
