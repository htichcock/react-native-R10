import React, { Component } from "react";
import { NavigationStyles } from "@expo/ex-navigation";
// import PropTypes from 'prop-types';
import Speaker from "./Speaker";

export default class SpeakerScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }
  static route = {
    styles: {
      ...NavigationStyles.SlideVertical
    }
  };

  render() {
    return <Speaker speaker={this.props.speakerData.speaker} />;
  }
}
