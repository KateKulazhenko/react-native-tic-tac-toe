import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as authActionsCreators from "../../../modules/Auth/actions";
import * as authSelectors from "../../../modules/Auth/selectors";

import Home from "../view/Home";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  static navigationOptions = {
    title: "title"
  };

  handleLogOut() {
    const {
      authActions: { logOut }
    } = this.props;

    logOut();
  }
  render() {
    const props = {
      handleLogOut: this.handleLogOut,
      navigation: this.props.navigation,
      userName: this.props.userName
    };

    return <Home {...props} />;
  }
}

HomeContainer.propTypes = {
  authActions: PropTypes.shape({
    logOut: PropTypes.func.isRequired
  }).isRequired,
  userName: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  userName: authSelectors.getUserName(state)
});

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActionsCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
