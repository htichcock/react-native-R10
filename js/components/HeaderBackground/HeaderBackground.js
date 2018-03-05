import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { color } from "../../config/styles";
import styles from "./styles";

const HeaderBG = () => (
  <LinearGradient
    start={{ x: 0.0, y: 1.0 }}
    end={{ x: 1.0, y: 0.0 }}
    colors={[color.red, color.purple]}
    style={styles.linearGradient}
  />
);

export default HeaderBG;
