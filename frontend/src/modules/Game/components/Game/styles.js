import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "90%"
  },
  logo: {
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
  gameWrapper: {
    flexDirection: "row"
  },
  gameField: {
    width: 300,
    height: 300,
    marginTop: 100,
    marginBottom: 30
  },
  cell: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#fff",
    borderRadius: 4
  },
  link: {
    color: "#a29b96",
    textTransform: "none",
    width: 20
  },
  cross: {
    color: "#d0cd91",
    fontSize: 65
  },
  zero: {
    color: "#a8c3cf",
    fontSize: 65
  },
  turnName: {
    color: "#a29b96",
    textAlign: "center"
  },
  winCell: {
    backgroundColor: "white"
  }
});

export default styles;
