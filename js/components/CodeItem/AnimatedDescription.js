import React from "react";
import { Animated, LayoutAnimation } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const AnimatedDescription = ({ open, text }) => {
  LayoutAnimation.easeInEaseOut();
  return (
    open && <Animated.Text style={styles.description}>{text}</Animated.Text>
  );
};
AnimatedDescription.propTypes = {
  open: PropTypes.bool,
  text: PropTypes.string
};
export default AnimatedDescription;
