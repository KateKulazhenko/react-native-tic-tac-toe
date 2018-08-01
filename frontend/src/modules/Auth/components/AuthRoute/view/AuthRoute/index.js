import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import WelcomeScreen from "../../../WelcomeScreen";
import Home from "../../../../../../pages/Home/containers/HomeContainer";

const AuthRoute = props => {
  return _.isEqual(props.isSignedIn, false) ? (
    <WelcomeScreen {...props} />
  ) : (
    <Home {...props} />
  );
};

AuthRoute.propTypes = {
  isSignedIn: PropTypes.bool.isRequired
};

export default AuthRoute;
