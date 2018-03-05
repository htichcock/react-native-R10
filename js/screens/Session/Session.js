import React from "react";
import { Text, ScrollView } from "react-native";
// import PropTypes from 'prop-types';
import Loader from "../../components/Loader";

const Session = ({ data, loading, error, speaker = { name: "" } }) => (
  <ScrollView>
    <Text>{data.location}</Text>
    <Text>{data.title}</Text>
    <Text>{data.start_time}</Text>
    <Text>{data.description}</Text>
    {loading ? <Loader /> : <Text>{speaker.name}</Text>}
  </ScrollView>
);

export default Session;
