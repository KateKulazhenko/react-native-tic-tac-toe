import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { Button } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./styles";

const Home = ({ handleLogOut, navigation, userName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoZero}>O</Text>
        <Text style={styles.logoCross}>X</Text>
      </View>
      <View style={styles.main}>
        <Button
          rounded
          success
          block
          style={styles.buttonGame}
          onPress={() => navigation.navigate("GameScreen")}
        >
          <Text style={styles.buttonText}>Game</Text>
        </Button>
        <Button full rounded onPress={handleLogOut} style={styles.buttonLogOut}>
          <Text style={styles.buttonText}>LogOut</Text>
        </Button>
      </View>
    </View>
  );
};

Home.propTypes = {
  handleLogOut: PropTypes.func.isRequired
};

export default Home;
