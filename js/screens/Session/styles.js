import { StyleSheet } from "react-native";

import { font, color } from "../../config/styles";
export default StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16
  },
  location: {
    fontFamily: font.regular,
    color: color.mediumGrey,
    paddingBottom: 14
  },
  title: {
    fontSize: 24,
    fontFamily: font.regular,
    paddingBottom: 14
  },
  time: {
    fontFamily: font.regular,
    color: color.red,
    paddingBottom: 14
  },
  description: {
    fontFamily: font.light,
    lineHeight: 23,
    fontSize: 16,
    paddingBottom: 23
  },
  speakerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: color.lightGrey
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  speaker: {
    fontFamily: font.regular,
    paddingLeft: 10
  },
  heart: {
    color: color.red,
    position: "absolute",
    right: 0,
    fontSize: 18
  }
});
