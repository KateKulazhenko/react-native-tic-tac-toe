import React from "react";
import { View, ActivityIndicator } from "react-native";

import styles from "./styles";

const Loading = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="#a8c3cf" />
  </View>
);
export default Loading;
