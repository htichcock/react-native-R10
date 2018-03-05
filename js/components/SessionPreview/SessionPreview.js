import React from "react";
import { Text, View, TouchableHighlight, SectionList } from "react-native";
import { formatSessionData, formatUnixDate } from "../../helpers/formatHelpers";
import { goToSession } from "../../helpers/navigationHelpers";
import styles from "./styles";
import { color } from "../../config/styles";

const Sessions = ({ data }) => (
  <SectionList
    renderItem={({ item }) => (
      <TouchableHighlight
        activeOpacity={1}
        underlayColor={color.lightGrey}
        onPress={() => {
          goToSession("schedule", {
            ...item,
            start_time: formatUnixDate(item.start_time)
          });
        }}
      >
        <View style={styles.sessionWrapper}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.location}>{item.location}</Text>
        </View>
      </TouchableHighlight>
    )}
    renderSectionHeader={({ section }) => (
      <Text style={styles.header}>{formatUnixDate(section.title)}</Text>
    )}
    keyExtractor={(item, index) => index}
    sections={formatSessionData(data)}
  />
);

export default Sessions;
