/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  NavigationProvider,
  StackNavigation,
  NavigationContext
} from "@expo/ex-navigation";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";

import Router from "./navigation/router";
import Store from "./redux/store";

const navigationContext = new NavigationContext({
  router: Router,
  store: Store
});
export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StatusBar barStyle="light-content" />
          <StackNavigation initialRoute={Router.getRoute("layout")} />
        </NavigationProvider>
      </Provider>
    );
  }
}
