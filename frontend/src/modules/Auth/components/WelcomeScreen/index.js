import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "native-base";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoZero}>O</Text>
        <Text style={styles.logoCross}>X</Text>
      </View>
      <Button
        transparent
        rounded
        bordered
        block
        onPress={() => navigation.navigate("SignInScreen")}
        style={styles.button}
      >
        <Text>Log In</Text>
      </Button>
      <Button
        transparent
        rounded
        bordered
        block
        dark
        onPress={() => navigation.navigate("SignUpScreen")}
        style={styles.button}
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
    justifyContent: "center",
    width: "80%"
  },
  button: {
    marginBottom: 20
  },
  logo: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "center"
  },
  logoZero: {
    color: "#a8c3cf",
    fontSize: 65
  },
  logoCross: {
    color: "#d0cd91",
    fontSize: 65
  }
});

export default WelcomeScreen;
