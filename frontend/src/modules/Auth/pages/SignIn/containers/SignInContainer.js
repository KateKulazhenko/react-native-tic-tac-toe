import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class SignInContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SignInContainer</Text>
      </View>
    );
  }
}
export default SignInContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
