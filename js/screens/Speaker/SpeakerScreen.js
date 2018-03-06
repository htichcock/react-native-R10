import React from "react";
import { NavigationStyles } from "@expo/ex-navigation";
import PropTypes from "prop-types";
import Speaker from "./Speaker";

const SpeakerScreen = ({ speakerData }) => (
  <Speaker speaker={speakerData.speaker} />
);

SpeakerScreen.route = {
  styles: {
    ...NavigationStyles.SlideVertical
  }
};

SpeakerScreen.propTypes = {
  speakerData: PropTypes.object
};

export default SpeakerScreen;
