import React, { Component } from "react";
import { Animated, Text } from "react-native";
import styles from "./styles";

export default class AnimatedDescription extends Component {
  constructor() {
    super();
    this.state = {
      top: new Animated.Value(-350)
    };
  }

  componentWillReceiveProps(nextProps) {
    nextProps.open
      ? Animated.timing(this.state.top, {
          toValue: 0,
          duration: 333
        }).start()
      : Animated.timing(this.state.top, {
          toValue: -350,
          duration: 333
        }).start();
  }
  render() {
    return (
      <Animated.View
        style={{
          top: this.state.top,
          height: this.state.top.interpolate({
            inputRange: [-351, -349],
            outputRange: [0, 1]
          }),
          flex: this.state.top.interpolate({
            inputRange: [-349, -348],
            outputRange: [0, 1]
          })
        }}
      >
        <Text style={styles.description}>{this.props.text}</Text>
      </Animated.View>
    );
  }
}
