import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types';
import HeaderBG from "../../components/HeaderBackground";
import { fetchSessionsData } from "../../redux/modules/sessions";
import Schedule from "./Schedule";
import { color } from "../../config/styles";

class ScheduleScreen extends Component {
  constructor() {
    super();
    this.fetchData = this.fetchData.bind(this);
  }
  fetchData() {
    this.props.dispatch(fetchSessionsData());
  }
  componentDidMount() {
    this.fetchData();
  }

  static route = {
    navigationBar: {
      title: "Schedule",
      tintColor: color.black
    }
  };

  render() {
    return (
      <Schedule
        data={this.props.sessionsData}
        loading={this.props.isLoading}
        error={this.props.error}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.sessions.isLoading,
  sessionsData: state.sessions.sessionsData,
  error: state.sessions.error
});
export default connect(mapStateToProps)(ScheduleScreen);
