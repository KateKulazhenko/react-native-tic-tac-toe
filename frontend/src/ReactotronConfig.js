import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";

// then add it to the plugin list
Reactotron.configure({ name: "React Demo" })
  .useReactNative()
  .use(sagaPlugin())
  .use(reactotronRedux())
  .connect();
