import { StyleSheet } from "react-native";

import { Colors, Metrics } from "../../theme";

export default StyleSheet.create({
  header: {
    color: Colors.black,
    fontWeight: "bold",
    paddingHorizontal: Metrics.baseSpace,
    paddingVertical: Metrics.smallSpace,
    textAlign: "left",
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
});
