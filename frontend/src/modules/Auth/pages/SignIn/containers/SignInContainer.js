import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../actions";
import { SIGNIN_FORM } from "../constants";
import SignIn from "../views/SignIn";

import { Button } from "native-base";

class SignInContainer extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  static navigationOptions = {
    headerTitle: "SignIn",
    headerRight: (
      <Button
        onPress={() => navigation.nagate("WelcomeScreen")}
        title="Back"
        color="#000"
      />
    )
  };

  onSubmit(data) {
    const {
      actions: { signinRequest }
    } = this.props;

    signinRequest(data);
  }

  render() {
    const props = {
      onSubmit: this.onSubmit,
      form: SIGNIN_FORM
    };

    return <SignIn {...props} />;
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(SignInContainer);
