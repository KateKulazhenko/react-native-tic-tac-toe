import { createSwitchNavigator } from "react-navigation";

// import AccountHeader from "../modules/Shared/AccountHeader";

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
        title: "SignIn"
      }
    },
    SignUpScreen: {
      screen: SignUp
    },
    SignInScreen: {
      screen: SignIn,
      navigationOptions: {
        title: "SignIn"
      }
    },
    HomeScreen: {
      screen: Home
    },
    GameScreen: {
      screen: Game
    }
  },
  {
    initialRouteName: "AuthScreen",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default Navigator;
