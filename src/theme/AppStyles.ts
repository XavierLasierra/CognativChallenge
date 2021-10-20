import Colors from "./Colors";
import { ViewStyle } from "react-native";

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const AppStyles = {
  screen: {
    mainScreen: {
      flex: 1,
      backgroundColor: Colors.mainBackground,
    },
  },
  container: {
    alignItems: "stretch",
    backgroundColor: Colors.mainBackground,
    flex: 1,
    justifyContent: "flex-start",
  } as ViewStyle,
};

export default AppStyles;
