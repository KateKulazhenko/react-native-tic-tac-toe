import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import WelcomeScreen from "../../../../modules/Auth/components/WelcomeScreen";
import Home from "../../../../pages/Home";

const Route = props => {
  return _.isEqual(props.isSignedIn, false) ? (
    <WelcomeScreen {...props} />
  ) : (
    <Home {...props} />
  );
};

Route.propTypes = {
  isSignedIn: PropTypes.bool.isRequired
};

export default Route;
