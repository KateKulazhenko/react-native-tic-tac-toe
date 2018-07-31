import React from "react";
import PropTypes from "prop-types";
import { Input, Item } from "native-base";
import { Text } from "react-native";

const FormInput = ({ input, meta, placeholder }) => {
  return (
    <Item>
      <Input
        placeholder={placeholder}
        error={meta.submitFailed && !!meta.error}
        onChangeText={input.onChange}
        value={input.value}
      />
      {meta.error &&
        meta.submitFailed && (
          <Text className={classes.textError}>{meta.error}</Text>
        )}
    </Item>
  );
};

FormInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default FormInput;
