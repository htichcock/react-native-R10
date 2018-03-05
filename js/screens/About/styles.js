import { StyleSheet } from "react-native";
import { color, font } from "../../config/styles";
export default StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10
  },
  forefront: {
    backgroundColor: color.white,
    zIndex: 3
  },
  logo: {
    height: 86,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: color.lightGrey,
    marginBottom: 8
  },
  p: {
    fontFamily: font.light,
    marginTop: 8,
    marginBottom: 8,
    lineHeight: 20
  },
  h: {
    fontFamily: font.regular,
    fontSize: 19,
    marginTop: 8,
    marginBottom: 8
  },
  footer: {
    fontFamily: font.light,
    marginTop: 16,
    marginBottom: 16
  },
  footerWrapper: {
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: color.lightGrey
  }
});
