import React from "react";
import { ActivityIndicator, View } from "react-native";
import styles from "./styles";
import { color } from "../../config/styles";
const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator color={color.black} />
  </View>
);

export default Loader;
