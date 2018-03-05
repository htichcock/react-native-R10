import { StyleSheet } from "react-native";
import { color, font } from "../../config/styles";

export default StyleSheet.create({
  heading: {
    flexDirection: "row",
    backgroundColor: color.white,
    zIndex: 2
  },
  headingText: {
    color: color.purple,
    fontFamily: font.regular,
    marginRight: 5,
    marginTop: 9,
    marginBottom: 9,
    backgroundColor: color.white,
    zIndex: 2
  },
  description: {
    fontFamily: font.light,
    lineHeight: 20,
    marginTop: 9,
    marginBottom: 9,
    backgroundColor: color.white
  },
  container: {
    overflow: "hidden"
  }
});
