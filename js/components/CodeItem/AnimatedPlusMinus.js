import React, { Component } from "react";
import { Animated, View } from "react-native";

import styles from "./styles";
export default class AnimatedPlusMinus extends Component {
  constructor() {
    super();
    this.duration = 333;
    this.state = {
      rotate: new Animated.Value(0)
    };
  }

  componentWillReceiveProps(nextProps) {
    nextProps.open
      ? Animated.timing(this.state.rotate, {
          toValue: 1,
          duration: this.duration
        }).start()
      : Animated.timing(this.state.rotate, {
          toValue: 0,
          duration: this.duration
        }).start();
  }

  render() {
    return (
      <View>
        <Animated.View
          style={[
            {
              transform: [
                {
                  rotate: this.state.rotate.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "270deg"]
                  })
                }
              ]
            },
            styles.vertBar
          ]}
        />
        <Animated.View
          style={[
            {
              transform: [
                {
                  rotate: this.state.rotate.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "360deg"]
                  })
                }
              ]
            },
            styles.horiBar
          ]}
        />
      </View>
    );
  }
}
