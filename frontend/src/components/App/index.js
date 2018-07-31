import React, { Component } from "react";
import { Provider } from "react-redux";
import { View, StyleSheet } from "react-native";

import createStore from "../../store";
import Navigator from "../Navigation";

const { store } = createStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EDFAF5",
    fontFamily: "Helvetica, Arial, sans-serif"
  }
});
