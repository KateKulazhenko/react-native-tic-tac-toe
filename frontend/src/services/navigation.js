import { createSwitchNavigator } from "react-navigation";

// import AccountHeader from "../modules/Shared/AccountHeader";

import Route from "../components/Route";
import WelcomeScreen from "../modules/Auth/components/WelcomeScreen";
import SignUp from "../modules/Auth/pages/SignUp";
import SignIn from "../modules/Auth/pages/SignIn";
import Home from "../pages/Home/containers/HomeContainer";
import Game from "../modules/Game";

// const AppStack = createStackNavigator({
//   HomeScreen: {
//     screen: Home,
//     navigationOptions: {
//       header: {
//         headerTitle: "Home"
//       }
//     }
//   },
//   GameScreen: { screen: Game }
// });

// const AuthStack = createStackNavigator({
//   SignUpScreen: { screen: SignUp },
//   SignInScreen: {
//     screen: SignIn,
//     navigationOptions: {
//       headerMode: "float"
//     }
//   },
//   WelcomeScreen: { screen: WelcomeScreen }
// });

// const Navigator = createSwitchNavigator(
//   {
//     AuthScreen: Route,
//     Auth: AuthStack,
//     App: AppStack
//   },
//   {
//     initialRouteName: "AuthScreen"
//   }
// );

const Navigator = createSwitchNavigator(
  {
    AuthScreen: {
      screen: Route
    },
    WelcomeScreen: {
      screen: WelcomeScreen
    },
    SignUpScreen: {
      screen: SignUp
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
