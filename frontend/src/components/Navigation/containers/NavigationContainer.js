import React, { Component } from "react";
import { setNavigator } from "../../../services/navigationService";
import Navigator from "../../../services/navigation";

class AppNavigator extends Component {
  componentDidMount() {
    setNavigator(this.navigator);
  }

  render() {
    return (
      <Navigator
        ref={nav => {
          this.navigator = nav;
        }}
      />
    );
  }
}

export default AppNavigator;
