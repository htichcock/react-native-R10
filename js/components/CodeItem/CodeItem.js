import React, { Component } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Platform,
  UIManager
} from "react-native";
import styles from "./styles";

import AnimatedDescription from "./AnimatedDescription";
import AnimatedPlusMinus from "./AnimatedPlusMinus";

export default class CodeItem extends Component {
  constructor() {
    super();
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = {
      open: false
    };
  }
  toggleOpen() {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            this.toggleOpen();
          }}
        >
          <View style={styles.heading}>
            <AnimatedPlusMinus open={this.state.open} />
            <Text style={styles.headingText}>{this.props.title}</Text>
          </View>
        </TouchableWithoutFeedback>
        <AnimatedDescription
          open={this.state.open}
          text={this.props.description}
        />
      </View>
    );
  }
}
