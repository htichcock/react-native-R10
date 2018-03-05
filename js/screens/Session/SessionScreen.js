import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types';
import HeaderBG from "../../components/HeaderBackground";
import Session from "./Session";
import { color, font } from "../../config/styles";
import { fetchSpeakersData } from "../../redux/modules/speakers";

class SessionScreen extends Component {
  static route = {
    navigationBar: {
      title: "Session",
      tintColor: color.white,
      renderBackground: () => <HeaderBG />,
      titleStyle: { fontFamily: font.regular, color: color.white }
    }
  };
  componentDidMount() {
    !this.props.speaker &&
      this.props.dispatch(fetchSpeakersData(this.props.sessionData.speaker));
  }

  render() {
    return (
      <Session
        data={this.props.sessionData}
        speaker={this.props.speaker}
        loading={this.props.isLoading}
        faves={this.props.faves}
        dispatch={this.props.dispatch}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isLoading: state.speakers.isLoading,
  speaker: state.speakers.speakersData[ownProps.sessionData.speaker],
  error: state.speakers.error,
  faves: state.sessions.faves
});
export default connect(mapStateToProps)(SessionScreen);
