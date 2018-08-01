import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "native-base";

import styles from "./styles";

const Home = ({ logOut }) => (
  <View style={styles.container}>
    <View style={styles.logo}>
      <Text style={styles.logoZero}>O</Text>
      <Text style={styles.logoCross}>X</Text>
    </View>
    <View style={styles.main}>
      <Button rounded success block style={styles.buttonGame}>
        <Text style={styles.buttonText}>Game</Text>
      </Button>
      <Button full bordered rounded>
        <Text style={styles.buttonText}>LogOut</Text>
      </Button>
    </View>
  </View>
);
export default Home;
