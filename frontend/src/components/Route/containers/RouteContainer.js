import { connect } from "react-redux";

import Route from "../view/Route";
import * as authSelectors from "../../../modules/Auth/selectors";

const mapStateToProps = state => ({
  isSignedIn: authSelectors.getIsSignedIn(state)
});

export default connect(mapStateToProps)(Route);
