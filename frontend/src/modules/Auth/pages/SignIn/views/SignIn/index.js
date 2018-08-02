import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { Text, View } from "react-native";
import { Field, reduxForm } from "redux-form";
import FormInput from "../../../../../Shared/Forms/components/Input";

import { Button } from "native-base";
import styles from "./styles";

const SignIn = ({ handleSubmit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
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
        secureTextEntry
      />
      <Button rounded block onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Button>
    </View>
  );
};

SignIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default compose(reduxForm())(SignIn);
