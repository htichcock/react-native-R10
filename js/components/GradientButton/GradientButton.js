import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { color } from "../../config/styles";
import styles from "./styles";
const GradientButton = ({ text, onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
    >
      <LinearGradient
        colors={[color.purple, color.blue]}
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={styles.linearGradient}
      >
        <Text style={styles.text}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  </View>
);

export default GradientButton;
