import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { Text, View } from "react-native";
import { Field, reduxForm } from "redux-form";
import FormInput from "../../../../../Shared/Forms/components/Input";

import { Button } from "native-base";
import styles from "./styles";

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
        secureTextEntry
      />
      <Button
        rounded
        block
        transparent
        onPress={handleSubmit}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Button>
    </View>
  );
};

SignUp.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default compose(reduxForm())(SignUp);
