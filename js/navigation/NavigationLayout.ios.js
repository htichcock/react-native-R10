import React, { Component } from "react";
import { Text } from "react-native";
import {
  TabNavigation,
  TabNavigationItem,
  StackNavigation
} from "@expo/ex-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import Router from "./router";

import { color, font } from "../config/styles";

export default class NavigationLayout extends Component {
  static route = {
    navigationBar: {
      visible: false
    }
  };
  render() {
    return (
      <TabNavigation
        tabBarColor={color.black}
        id="main"
        navigatorUID="main"
        initialTab="about"
      >
        <TabNavigationItem
          id="schedule"
          title="Schedule"
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon(isSelected, "ios-calendar")}
        >
          <StackNavigation
            navigatorUID="schedule"
            initialRoute={Router.getRoute("schedule")}
          />
        </TabNavigationItem>
        <TabNavigationItem
          id="about"
          title="About"
          renderTitle={this.renderTitle}
          renderIcon={isSelected =>
            this.renderIcon(isSelected, "ios-information-circle")
          }
        >
          <StackNavigation
            navigatorUID="about"
            initialRoute={Router.getRoute("about")}
          />
        </TabNavigationItem>
      </TabNavigation>
    );
  }

  renderTitle(isSelected, title) {
    return (
      <Text
        style={{
          color: isSelected ? color.white : color.mediumGrey,
          fontFamily: font.light
        }}
      >
        {title}
      </Text>
    );
  }

  renderIcon(isSelected, name) {
    return (
      <Icon
        name={name}
        size={24}
        style={{
          color: isSelected ? color.white : color.mediumGrey
        }}
      />
    );
  }
}
