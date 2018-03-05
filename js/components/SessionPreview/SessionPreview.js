import React from "react";
import { Text, View, TouchableHighlight, SectionList } from "react-native";
import { formatSessionData, formatUnixDate } from "../../helpers/formatHelpers";
import { goToSession } from "../../helpers/navigationHelpers";

const Sessions = ({ data }) => (
  <SectionList
    renderItem={({ item }) => (
      <TouchableHighlight
        onPress={() => {
          goToSession("schedule", {
            ...item,
            start_time: formatUnixDate(item.start_time)
          });
        }}
      >
        <View>
          <Text>{item.title}</Text>
          <Text>{item.location}</Text>
        </View>
      </TouchableHighlight>
    )}
    renderSectionHeader={({ section }) => (
      <Text>{formatUnixDate(section.title)}</Text>
    )}
    keyExtractor={(item, index) => index}
    sections={formatSessionData(data)}
  />
);

export default Sessions;
