import React, { Component } from "react";
import { Text, View } from "react-native";

import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem
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
      <DrawerNavigation
        id="main"
        initialItem="schedule"
        drawerWidth={300}
        renderHeader={this.renderHeader}
      >
        <DrawerNavigationItem
          id="schedule"
          title="Schedule"
          renderTitle={isSelected => this.renderTitle(isSelected, "Schedule")}
          renderIcon={isSelected => this.renderIcon(isSelected, "md-calendar")}
        >
          <StackNavigation
            navigatorUID="schedule"
            initialRoute={Router.getRoute("schedule")}
          />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="faves"
          title="Faves"
          renderTitle={isSelected => this.renderTitle(isSelected, "Faves")}
          renderIcon={isSelected => this.renderIcon(isSelected, "md-heart")}
        >
          <StackNavigation
            navigatorUID="faves"
            initialRoute={Router.getRoute("faves")}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="about"
          title="About"
          renderTitle={isSelected => this.renderTitle(isSelected, "About")}
          renderIcon={isSelected =>
            this.renderIcon(isSelected, "md-information-circle")
          }
        >
          <StackNavigation
            navigatorUID="about"
            initialRoute={Router.getRoute("about")}
          />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }

  renderHeader = () => {
    return <View style={{ height: 20 }} />;
  };

  renderTitle(isSelected, title) {
    return (
      <Text
        style={{
          color: isSelected ? color.purple : color.mediumGrey,
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
          color: isSelected ? color.purple : color.mediumGrey
        }}
      />
    );
  }
}
