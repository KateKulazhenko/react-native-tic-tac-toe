import React, { Component } from "react";
import { Provider } from "react-redux";
import { View } from "react-native";
import { PersistGate } from "redux-persist/es/integration/react";

import createStore from "../../store";
import Navigator from "../Navigation";

import styles from "./styles";

const { store, persistor } = createStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View style={styles.container}>
            <Navigator />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}
