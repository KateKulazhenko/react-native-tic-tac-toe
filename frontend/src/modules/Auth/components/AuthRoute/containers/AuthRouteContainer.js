import { connect } from "react-redux";

import AuthRoute from "../view/AuthRoute";
import * as authSelectors from "../../../../Auth/selectors";

const mapStateToProps = state => ({
  isSignedIn: authSelectors.getIsSignedIn(state)
});

export default connect(mapStateToProps)(AuthRoute);
