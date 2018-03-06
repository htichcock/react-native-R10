import React, { Component } from "react";
import { Animated, LayoutAnimation } from "react-native";
import styles from "./styles";

const AnimatedDescription = ({ open, text }) => {
  LayoutAnimation.easeInEaseOut();
  return (
    open && <Animated.Text style={styles.description}>{text}</Animated.Text>
  );
};
export default AnimatedDescription;
