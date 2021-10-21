import React from "react";
import { TouchableOpacity, View } from "react-native";
import { IBackButtonProps } from "../../types/interfaces";

import styles from "./backButton.styles";

export default function BackButton({ actionOnPress }: IBackButtonProps) {
  return (
    <TouchableOpacity
      accessibilityRole={"button"}
      style={styles.backButton}
      onPress={actionOnPress}>
      <View style={[styles.line, styles.lineTop]} />
      <View style={[styles.line, styles.lineBottom]} />
    </TouchableOpacity>
  );
}
