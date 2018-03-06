import React from "react";
import PropTypes from "prop-types";
import SessionPreview from "../../components/SessionPreview";
import Loader from "../../components/Loader";

const Schedule = ({ data, loading }) =>
  loading ? <Loader /> : <SessionPreview data={data} uid="schedule" />;

Schedule.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool
};
export default Schedule;
