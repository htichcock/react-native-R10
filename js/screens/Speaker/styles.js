import { StyleSheet } from "react-native";
import { color, font } from "../../config/styles";
export default StyleSheet.create({
  container: {
    backgroundColor: color.black,
    padding: 10
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 36,
    paddingBottom: 36
  },
  headerText: {
    fontFamily: font.regular,
    color: color.white,
    alignSelf: "center"
  },
  quitIconWrapper: {
    position: "absolute",
    top: 26,
    left: 0
  },
  quitIcon: {
    color: color.white,
    fontSize: 36
  },
  speakerWrapper: {
    backgroundColor: color.white,
    borderRadius: 5,
    alignItems: "center",
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 12
  },
  avatar: {
    height: 98,
    width: 98,
    borderRadius: 49
  },
  speaker: {
    fontFamily: font.regular,
    fontSize: 24,
    paddingTop: 20,
    paddingBottom: 20
  },
  bio: {
    lineHeight: 22,
    fontFamily: font.light
  }
});
