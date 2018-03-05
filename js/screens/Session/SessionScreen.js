import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types';
import HeaderBG from "../../components/HeaderBackground";
import Session from "./Session";
import { color } from "../../config/styles";
import { fetchSpeakersData } from "../../redux/modules/speakers";

class SessionScreen extends Component {
  static route = {
    navigationBar: {
      title: "Session",
      tintColor: color.black
    }
  };

  constructor() {
    super();
    this.fetchData = this.fetchData.bind(this);
  }
  fetchData() {
    this.props.dispatch(fetchSpeakersData(this.props.sessionData.speaker));
  }
  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <Session
        data={this.props.sessionData}
        speaker={this.props.speaker}
        loading={this.props.isLoading}
        error={this.props.error}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isLoading: state.speakers.isLoading,
  speaker: state.speakers.speakersData[ownProps.sessionData.speaker],
  error: state.speakers.error
});
export default connect(mapStateToProps)(SessionScreen);
