import { StyleSheet } from "react-native";
import { Colors } from "../../theme";

export default StyleSheet.create({
  backButton: {
    height: 50,
    left: 20,
    position: "absolute",
    top: 30,
    width: 50,
    zIndex: 2,
  },
  line: {
    backgroundColor: Colors.gray,
    borderRadius: 50,
    height: 7,
    position: "absolute",
    width: 25,
  },
  lineBottom: {
    top: 13,
    transform: [{ rotate: "45deg" }],
  },
  lineTop: {
    transform: [{ rotate: "-45deg" }],
  },
});
