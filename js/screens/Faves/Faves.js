import React from "react";
import { View, Text } from "react-native";
import SessionPreview from "../../components/SessionPreview";
import Loader from "../../components/Loader";
// import PropTypes from 'prop-types';
import styles from "./styles";

const Faves = ({ data, loading, error }) =>
  loading ? (
    <Loader />
  ) : data && data.length ? (
    <SessionPreview data={data} uid="faves" />
  ) : (
    <View style={styles.wrapper}>
      <Text style={styles.text}>You have no favourites yet!</Text>
    </View>
  );

export default Faves;
