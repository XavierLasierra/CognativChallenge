import { StyleSheet } from "react-native";

import Colors from "../../theme/Colors";
import Metrics from "../../theme/Metrics";

export default StyleSheet.create({
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
  title: {
    fontWeight: "bold",
  },
});
