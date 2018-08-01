import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "80%"
  },
  logo: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "center"
  },
  logoZero: {
    color: "#a8c3cf",
    fontSize: 65
  },
  logoCross: {
    color: "#d0cd91",
    fontSize: 65
  },
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff"
  },
  buttonGame: {
    backgroundColor: "#d0cd91",
    marginBottom: 15
  }
});

export default styles;
