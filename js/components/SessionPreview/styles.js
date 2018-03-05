import { StyleSheet } from "react-native";
import { color, font } from "../../config/styles";

export default StyleSheet.create({
  header: {
    backgroundColor: color.lightGrey,
    fontFamily: font.regular,
    fontSize: 12,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  sessionWrapper: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: color.lightGrey
  },
  title: {
    color: color.black,
    fontFamily: font.regular,
    paddingBottom: 5
  },
  location: {
    color: color.mediumGrey,
    fontFamily: font.regular,
    fontSize: 12
  },
  heart: {
    color: color.red
  }
});
