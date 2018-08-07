import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as authSelectors from "../../../../modules/Auth/selectors";
import AccountHeader from "../components/AccountHeader";

class AccountHeaderContainer extends Component {
  render() {
    return <AccountHeader userName={this.props.userName} />;
  }
}

AccountHeaderContainer.propTypes = {
  userName: PropTypes.string.isRequited
};

const mapStateToProps = state => ({
  userName: authSelectors.getUserName(state)
});

export default connect(mapStateToProps)(AccountHeaderContainer);
