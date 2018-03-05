import { StyleSheet } from "react-native";
import { color, font } from "../../config/styles";
export default StyleSheet.create({
  linearGradient: {
    height: 36,
    borderRadius: 18,
    paddingRight: 18,
    paddingLeft: 18,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    paddingTop: 22,
    paddingBottom: 22,
    alignItems: "center"
  },
  text: {
    color: color.white,
    fontFamily: font.regular
  }
});
