import { StyleSheet } from "react-native";

import Colors from "../../theme/Colors";
import Metrics from "../../theme/Metrics";

export default StyleSheet.create({
  darkener: {
    backgroundColor: Colors.black30,
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 5,
  },
  description: {
    color: Colors.darkGrey,
    fontSize: 14,
    lineHeight: 24,
  },
  header: {
    color: Colors.black,
    fontSize: 14,
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
