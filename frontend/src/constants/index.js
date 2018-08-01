import { AsyncStorage } from "react-native";

export const CONFIG = {
  key: "primary",
  storage: AsyncStorage,
  whitelist: ["auth"]
};
