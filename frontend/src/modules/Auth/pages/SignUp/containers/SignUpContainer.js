import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../actions";
import SignUp from "../views/SignUp";
import { SIGNUP_FORM } from "../constants";

class SignUpContainer extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    const {
      actions: { signupRequest }
    } = this.props;

    signupRequest(data);
  }

  render() {
    const props = {
      onSubmit: this.onSubmit,
      form: SIGNUP_FORM
    };

    return <SignUp {...props} />;
  }
}

SignUpContainer.propTypes = {
  actions: PropTypes.shape({
    signupRequest: PropTypes.func.isRequired
  }).isRequired
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(SignUpContainer);
