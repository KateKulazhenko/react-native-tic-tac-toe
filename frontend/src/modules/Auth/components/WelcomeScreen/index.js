import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "native-base";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button transparent onPress={() => navigation.navigate("SignInScreen")}>
        <Text>Log In</Text>
      </Button>
      <Button transparent onPress={() => navigation.navigate("SignUpScreen")}>
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
