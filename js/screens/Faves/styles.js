import { StyleSheet } from "react-native";
import { font, color } from "../../config/styles";
export default StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontFamily: font.regular,
    color: color.lightGrey,
    fontSize: 24,
    textAlign: "center"
  }
});
