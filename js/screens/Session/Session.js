import React from "react";
import { Text, ScrollView, View, Image } from "react-native";
// import PropTypes from 'prop-types';
import Loader from "../../components/Loader";
import GradientButton from "../../components/GradientButton";
import styles from "./styles";
import logo from "../../assets/images/r10_logo.png";

const Session = ({ data, loading, error, speaker = {} }) => (
  <ScrollView style={styles.container}>
    <Text style={styles.location}>{data.location}</Text>
    <Text style={styles.title}>{data.title}</Text>
    <Text style={styles.time}>{data.start_time}</Text>
    <Text style={styles.description}>{data.description}</Text>
    <Text style={styles.location}>Presented By:</Text>
    {loading && !speaker.name ? (
      <Loader />
    ) : (
      <View style={styles.speakerWrapper}>
        <Image
          style={styles.avatar}
          source={speaker.image ? { uri: speaker.image } : logo}
        />
        <Text style={styles.speaker}>{speaker.name}</Text>
      </View>
    )}
    <GradientButton text={"Add to Faves"} />
  </ScrollView>
);

export default Session;
