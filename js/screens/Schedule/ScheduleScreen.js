import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types';
import HeaderBG from "../../components/HeaderBackground";
import { fetchSessionsData } from "../../redux/modules/sessions";
import Schedule from "./Schedule";
import { color, font } from "../../config/styles";
import { setFavesByRealm } from "../../redux/modules/sessions";

class ScheduleScreen extends Component {
  componentDidMount() {
    !this.props.sessionsData.length && this.props.dispatch(fetchSessionsData());
    !this.props.faves.length && this.props.dispatch(setFavesByRealm());
  }

  static route = {
    navigationBar: {
      title: "Schedule",
      tintColor: color.white,
      renderBackground: () => <HeaderBG />,
      titleStyle: { fontFamily: font.regular, color: color.white }
    }
  };

  render() {
    return (
      <Schedule
        data={this.props.sessionsData}
        loading={this.props.isLoading}
        faves={this.props.faves}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.sessions.isLoading,
  sessionsData: state.sessions.sessionsData,
  faves: state.sessions.faves,
  error: state.sessions.error
});
export default connect(mapStateToProps)(ScheduleScreen);
