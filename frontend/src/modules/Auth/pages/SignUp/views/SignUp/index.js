import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { Text, View, StyleSheet } from "react-native";
import { Field, reduxForm } from "redux-form";
import FormInput from "../../../../../Shared/Forms/components/Input";

import { Button } from "native-base";

const SignUp = ({ handleSubmit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Field
        name="username"
        component={FormInput}
        placeholder="name"
        label="username"
      />
      <Field
        name="password"
        component={FormInput}
        placeholder="password"
        type="password"
      />
      <Button block onPress={handleSubmit}>
        <Text>Sign Up</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    padding: 24,
    backgroundColor: "#E5F8F1",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#CDCFD1",
    borderRadius: 5
  },
  title: {
    textAlign: "center",
    color: "#bfbd87",
    fontSize: 20
  },
  button: {
    width: "150px",
    height: "42px",
    margin: "24px auto",
    color: "#fff"
  }
});

SignUp.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default compose(reduxForm())(SignUp);
