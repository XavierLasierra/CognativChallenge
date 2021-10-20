import { StyleSheet } from "react-native";

import Colors from "../../theme/Colors";
import Metrics from "../../theme/Metrics";

export default StyleSheet.create({
  imageContainer: {
    height: 128,
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
});
