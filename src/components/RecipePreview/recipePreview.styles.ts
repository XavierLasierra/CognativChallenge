import { StyleSheet } from "react-native";

import Colors from "../../theme/Colors";
import Metrics from "../../theme/Metrics";

export default StyleSheet.create({
  categoryRow: {
    color: Colors.darkGrey,
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "bold",
    letterSpacing: 1,
    lineHeight: 24,
    textAlign: "left",
  },
  cellRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginRight: Metrics.smallSpace,
  },
  cellText: {
    color: Colors.mediumGrey,
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "300",
    letterSpacing: 0.5,
    lineHeight: 24,
  },
  imageContainer: {
    height: 128,
  },
  infoContainer: {
    alignItems: "stretch",
    justifyContent: "center",
    paddingHorizontal: Metrics.baseSpace,
    paddingVertical: Metrics.smallSpace,
  },
  properties: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  recipeImage: {
    flex: 1,
  },
  rowContainer: {
    alignItems: "stretch",
    backgroundColor: Colors.whiteFull,
    borderRadius: Metrics.borderRadius,
    justifyContent: "flex-start",
    marginBottom: Metrics.baseSpace,
    marginHorizontal: Metrics.baseSpace,
    overflow: "hidden",
  },
  titleRow: {
    color: Colors.black,
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: 0.5,
    lineHeight: 24,
    textAlign: "left",
  },
});
