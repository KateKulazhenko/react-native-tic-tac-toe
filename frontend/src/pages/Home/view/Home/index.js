import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "native-base";

import styles from "./styles";

const Home = ({ handleLogOut }) => (
  <View style={styles.container}>
    <View style={styles.logo}>
      <Text style={styles.logoZero}>O</Text>
      <Text style={styles.logoCross}>X</Text>
    </View>
    <View style={styles.main}>
      <Button rounded success block style={styles.buttonGame}>
        <Text style={styles.buttonText}>Game</Text>
      </Button>
      <Button full rounded onPress={handleLogOut} style={styles.buttonLogOut}>
        <Text style={styles.buttonText}>LogOut</Text>
      </Button>
    </View>
  </View>
);

Home.propTypes = {
  handleLogOut: PropTypes.func.isRequired
};

export default Home;
