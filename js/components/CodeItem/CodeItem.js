import React, { Component } from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";

import AnimatedDescription from "./AnimatedDescription";

export default class CodeItem extends Component {
  constructor() {
    super();
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
            <Text style={[styles.headingText, { width: 10 }]}>
              {this.state.open ? "-" : "+"}
            </Text>
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
