import React from "react";
import {
  Text,
  Image,
  ScrollView,
  View,
  Platform,
  TouchableOpacity,
  Linking
} from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import logo from "../../assets/images/r10_logo.png";
import { popSpeaker } from "../../helpers/navigationHelpers";
import GradientButton from "../../components/GradientButton";

const Speaker = ({ speaker }) => (
  <ScrollView style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.quitIconWrapper}
        onPress={() => {
          popSpeaker();
        }}
      >
        <Icon
          name={Platform.select({
            ios: "ios-close",
            android: "md-close"
          })}
          style={styles.quitIcon}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>About the Speaker</Text>
    </View>
    <View style={styles.speakerWrapper}>
      <Image
        style={styles.avatar}
        source={speaker.image ? { uri: speaker.image } : logo}
      />
      <Text style={styles.speaker}>{speaker.name}</Text>
      <Text style={styles.bio}>{speaker.bio}</Text>
      <GradientButton
        text={"Read More on Wikipedia"}
        onPress={() => {
          Linking.openURL(speaker.url);
        }}
      />
    </View>
  </ScrollView>
);

Speaker.propTypes = {
  speaker: PropTypes.object
};
export default Speaker;
