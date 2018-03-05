import React, { Component } from "react";
// import PropTypes from 'prop-types';
import Faves from "./Faves";
import HeaderBG from "../../components/HeaderBackground";

import { color, font } from "../../config/styles";

export default class FavesScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }

  static route = {
    navigationBar: {
      title: "Faves",
      tintColor: color.white,
      renderBackground: () => <HeaderBG />,
      titleStyle: { fontFamily: font.regular, color: color.white }
    }
  };

  render() {
    return <Faves />;
  }
}
