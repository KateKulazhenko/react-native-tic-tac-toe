import React from "react";
import { createSwitchNavigator } from "react-navigation";

import WelcomeScreen from "../../modules/Auth/components/WelcomeScreen";
import SignUp from "../../modules/Auth/pages/SignUp/containers/SignUpContainer";

const Navigator = new createSwitchNavigator(
  {
    WelcomeScreen: {
      screen: WelcomeScreen,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    SignUpScreen: {
      screen: SignUp,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  {
    initialRouteName: "WelcomeScreen"
  }
);

export default Navigator;
