import React from "react";
import { ActivityIndicator, SafeAreaView, View } from "react-native";

import { AppStyles, Colors } from "../../theme";
import styles from "./loading.styles";

export default function Loading() {
  return (
    <SafeAreaView style={AppStyles.screen.mainScreen}>
      <View style={styles.indicatorContainer}>
        <ActivityIndicator
          size="large"
          color={Colors.black}
          testID="activity-indicator"
        />
      </View>
    </SafeAreaView>
  );
}
