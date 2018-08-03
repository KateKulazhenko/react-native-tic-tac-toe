import { createSwitchNavigator } from "react-navigation";

import Route from "../components/Route";
import WelcomeScreen from "../modules/Auth/components/WelcomeScreen";
import SignUp from "../modules/Auth/pages/SignUp";
import SignIn from "../modules/Auth/pages/SignIn";
import Home from "../pages/Home/containers/HomeContainer";
import Game from "../modules/Game";

const Navigator = createSwitchNavigator(
  {
    AuthScreen: {
      screen: Route
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
    },
    SignInScreen: {
      screen: SignIn
    },
    HomeScreen: {
      screen: Home
    },
    GameScreen: {
      screen: Game
    }
  },
  {
    initialRouteName: "AuthScreen"
  }
);

export default Navigator;
