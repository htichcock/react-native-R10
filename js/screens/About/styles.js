import { StyleSheet } from "react-native";
import { color, font } from "../../config/styles";
export default StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: color.white,
    zIndex: 2
  },
  logo: {
    height: 86,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: color.lightGrey,
    marginBottom: 8,
    backgroundColor: color.white,
    zIndex: 2
  },
  p: {
    fontFamily: font.light,
    marginTop: 8,
    marginBottom: 8,
    lineHeight: 20,
    backgroundColor: color.white,
    zIndex: 2
  },
  h: {
    fontFamily: font.regular,
    fontSize: 19,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: color.white,
    zIndex: 2
  }
});
