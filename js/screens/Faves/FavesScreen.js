import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { fetchSessionsData } from "../../redux/modules/sessions";
import Faves from "./Faves";
import HeaderBG from "../../components/HeaderBackground";

import { color, font } from "../../config/styles";
import { setFavesByRealm } from "../../redux/modules/sessions";

class FavesScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    !this.props.sessionsData.length && this.props.dispatch(fetchSessionsData());
    !this.props.faves.length && this.props.dispatch(setFavesByRealm());
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
    return (
      <Faves
        data={this.props.sessionsData.filter(session =>
          this.props.faves.includes(session.session_id)
        )}
        loading={this.props.isLoading}
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
export default connect(mapStateToProps)(FavesScreen);
