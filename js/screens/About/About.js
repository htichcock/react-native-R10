import React from "react";
import { Text, View, ScrollView, Image, ActivityIndicator } from "react-native";
import Logo from "../../assets/images/r10_logo.png";
// import PropTypes from 'prop-types';
import styles from "./styles";

import CodeItem from "../../components/CodeItem";
import Loader from "../../components/Loader";

const About = ({ data, loading, error }) => (
  <ScrollView style={styles.container}>
    <View style={styles.logo}>
      <Image source={Logo} />
    </View>
    {loading ? (
      <Loader />
    ) : (
      <View>
        <Text style={styles.p}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text style={styles.h}>Date & Venue</Text>
        <Text style={styles.p}>
          The R10 conference will take place on Tuesday, June 27, 2017 in
          Vancouver, BC.
        </Text>
        <Text style={styles.h}>Code of Conduct</Text>
        {data.map(data => (
          <CodeItem
            key={data.title}
            title={data.title}
            description={data.description}
          />
        ))}
      </View>
    )}
    <View style={styles.footerWrapper}>
      <Text style={styles.footer}>© RED Academy 2017</Text>
    </View>
  </ScrollView>
);

export default About;
