import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./styles";

const AccountHeader = ({ username }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{username}</Text>
    <Icon name="ios-person" style={styles.icon} />
  </View>
);

AccountHeader.propTypes = {
  userName: PropTypes.string.isRequited
};

export default AccountHeader;
