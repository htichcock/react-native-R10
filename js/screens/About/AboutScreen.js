import React, { Component } from "react";
import { connect } from "react-redux";
import { StatusBar, View } from "react-native";
import PropTypes from "prop-types";
import HeaderBG from "../../components/HeaderBackground";
import About from "./About";
import { fetchCodeOfConduct } from "../../redux/modules/about";
import { color, font } from "../../config/styles";

class AboutScreen extends Component {
  componentDidMount() {
    !this.props.codeOfConductData.length &&
      this.props.dispatch(fetchCodeOfConduct());
  }

  static route = {
    navigationBar: {
      title: "About",
      tintColor: color.white,
      renderBackground: () => <HeaderBG />,
      titleStyle: { fontFamily: font.regular, color: color.white }
    }
  };

  render() {
    return (
      <View>
        <About
          data={this.props.codeOfConductData}
          loading={this.props.isLoading}
          error={this.props.error}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.about.isLoading,
  codeOfConductData: state.about.codeOfConductData,
  error: state.about.error
});
export default connect(mapStateToProps)(AboutScreen);
