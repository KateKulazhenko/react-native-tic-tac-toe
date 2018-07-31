import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "native-base";

const WelcomeScreen = props => {
  return (
    <View style={styles.container}>
      <Button
        transparent
        onPress={() => props.navigation.navigate("SignInScreen")}
      >
        <Text>Log In</Text>
      </Button>
      <Button
        transparent
        onPress={() => props.navigation.navigate("SignUpScreen")}
      >
        <Text>Sign Up</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default WelcomeScreen;
