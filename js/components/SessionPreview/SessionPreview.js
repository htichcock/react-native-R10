import React from "react";
import {
  Text,
  View,
  TouchableHighlight,
  SectionList,
  Platform
} from "react-native";
import { connect } from "react-redux";
import { formatSessionData, formatUnixDate } from "../../helpers/formatHelpers";
import { goToSession } from "../../helpers/navigationHelpers";
import styles from "./styles";
import { color } from "../../config/styles";

import Icon from "react-native-vector-icons/Ionicons";

const SessionPreview = ({ data, faves, uid }) => (
  <SectionList
    renderItem={({ item }) => (
      <TouchableHighlight
        activeOpacity={1}
        underlayColor={color.lightGrey}
        onPress={() => {
          goToSession(uid, {
            ...item,
            start_time: formatUnixDate(item.start_time)
          });
        }}
      >
        <View style={styles.sessionWrapper}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.location}>{item.location}</Text>
          {faves &&
            faves.includes(item.session_id) && (
              <Icon
                name={Platform.select({
                  ios: "ios-heart",
                  android: "md-heart"
                })}
                style={styles.heart}
              />
            )}
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

const mapStateToProps = state => ({
  faves: state.sessions.faves
});
export default connect(mapStateToProps)(SessionPreview);
