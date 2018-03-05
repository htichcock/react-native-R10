import React from "react";
import SessionPreview from "../../components/SessionPreview";
import Loader from "../../components/Loader";
// import PropTypes from 'prop-types';

const Schedule = ({ data, loading, error }) =>
  loading ? <Loader /> : <SessionPreview data={data} uid="schedule" />;

export default Schedule;
