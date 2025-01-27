import { StyleSheet } from "react-native";

import { Fonts, Colors, Metrics } from "../../theme";

export default StyleSheet.create({
  darkener: {
    backgroundColor: Colors.black30,
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1,
  },
  description: {
    color: Colors.darkGrey,
    fontSize: Fonts.size.medium,
    lineHeight: 24,
  },
  header: {
    color: Colors.black,
    fontSize: Fonts.size.medium,
    lineHeight: 24,
    textAlign: "center",
  },
  infoBox: {
    alignItems: "stretch",
    alignSelf: "stretch",
    justifyContent: "center",
    paddingHorizontal: Metrics.baseSpace,
    paddingVertical: Metrics.smallSpace,
  },
  recipeImage: {
    height: 192,
  },
});
