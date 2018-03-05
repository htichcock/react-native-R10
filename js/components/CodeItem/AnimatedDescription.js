import React, { Component } from "react";
import { Animated, Text } from "react-native";
import styles from "./styles";

export default class AnimatedDescription extends Component {
  constructor() {
    super();
    this.state = {
      top: new Animated.Value(-350),
      open: false
    };
  }

  componentWillReceiveProps(nextProps) {
    nextProps.open
      ? this.setState({ open: !this.state.open })
      : setTimeout(() => {
          this.setState({ open: !this.state.open });
        }, 333);
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
          flex: this.state.top.interpolate({
            inputRange: [-350, -349],
            outputRange: [0, 1]
          })
        }}
      >
        {this.state.open && (
          <Text style={styles.description}>{this.props.text}</Text>
        )}
      </Animated.View>
    );
  }
}
