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
    marginRight: 15,
    marginBottom: 9,
    backgroundColor: color.white,
    zIndex: 2,
    top: 0,
    left: 15
  },
  description: {
    fontFamily: font.light,
    lineHeight: 20,
    marginBottom: 9,
    backgroundColor: color.white
  },
  container: {
    overflow: "hidden"
  },
  horiBar: {
    width: 9,
    height: 1,
    position: "absolute",
    top: 8,
    backgroundColor: color.purple
  },
  vertBar: {
    width: 1,
    height: 9,
    position: "absolute",
    left: 4,
    top: 4,
    backgroundColor: color.purple
  }
});
