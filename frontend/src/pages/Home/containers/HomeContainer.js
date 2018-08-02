import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as authActionsCreators from "../../../modules/Auth/actions";

import Home from "../view/Home";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    const {
      authActions: { logOut }
    } = this.props;

    logOut();
  }
  render() {
    const props = { handleLogOut: this.handleLogOut };

    return <Home {...props} />;
  }
}

HomeContainer.propTypes = {
  authActions: PropTypes.shape({
    logOut: PropTypes.func.isRequired
  }).isRequired
};

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActionsCreators, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(HomeContainer);
