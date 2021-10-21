import { StyleSheet } from "react-native";

import { Colors, Metrics } from "../../theme";

export default StyleSheet.create({
  navBar: {
    alignItems: "center",
    backgroundColor: Colors.whiteFull,
    height: Metrics.navBarHeight,
    justifyContent: "center",
    marginTop: Metrics.statusBarHeight,
  },
  title: {
    fontWeight: "bold",
  },
});
