import React from "react";
import { createSwitchNavigator } from "react-navigation";

import AuthRoute from "../../modules/Auth/components/AuthRoute";
import WelcomeScreen from "../../modules/Auth/components/WelcomeScreen";
import SignUp from "../../modules/Auth/pages/SignUp/containers/SignUpContainer";

const Navigator = new createSwitchNavigator(
  {
    AuthScreen: {
      screen: AuthRoute
    },
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
    initialRouteName: "AuthScreen"
  }
);

export default Navigator;
