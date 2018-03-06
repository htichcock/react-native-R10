import React from "react";
import {
  Text,
  ScrollView,
  View,
  TouchableHighlight,
  Image,
  Platform
} from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import GradientButton from "../../components/GradientButton";
import styles from "./styles";
import logo from "../../assets/images/iTunesArtwork.png";
import { goToSpeaker } from "../../helpers/navigationHelpers";
import { color } from "../../config/styles";
import { addFave, removeFave } from "../../redux/modules/sessions";
import Icon from "react-native-vector-icons/Ionicons";

const Session = ({ data, loading, faves, dispatch, speaker = {} }) => (
  <ScrollView style={styles.container}>
    <Text style={styles.location}>{data.location}</Text>
    {faves &&
      faves.includes(data.session_id) && (
        <Icon
          name={Platform.select({
            ios: "ios-heart",
            android: "md-heart"
          })}
          style={styles.heart}
        />
      )}
    <Text style={styles.title}>{data.title}</Text>
    <Text style={styles.time}>{data.start_time}</Text>
    <Text style={styles.description}>{data.description}</Text>
    <Text style={styles.location}>Presented By:</Text>
    {loading && !speaker.name ? (
      <Loader />
    ) : (
      <TouchableHighlight
        onPress={() => {
          speaker.name && goToSpeaker({ speaker });
        }}
        activeOpacity={1}
        underlayColor={speaker.name ? color.lightGrey : color.white}
      >
        <View style={styles.speakerWrapper}>
          <Image
            style={styles.avatar}
            source={speaker.image ? { uri: speaker.image } : logo}
          />
          <Text style={styles.speaker}>
            {speaker.name ? speaker.name : "R10 Conference"}
          </Text>
        </View>
      </TouchableHighlight>
    )}
    <GradientButton
      text={
        faves && faves.includes(data.session_id)
          ? "Remove from Faves"
          : "Add to Faves"
      }
      onPress={() => {
        faves && faves.includes(data.session_id)
          ? dispatch(removeFave(data.session_id))
          : dispatch(addFave(data.session_id));
      }}
    />
  </ScrollView>
);
Session.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  faves: PropTypes.array,
  dispatch: PropTypes.func,
  speaker: PropTypes.object
};
export default Session;
