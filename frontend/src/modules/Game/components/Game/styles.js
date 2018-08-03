import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    display: "flex"
  },
  logo: {
    padding: "10px 0",
    textAlign: "center"
  },
  logoFirst: {
    color: "#a8c3cf",
    fontSize: 30
  },
  logoSecond: {
    color: "#d0cd91",
    fontSize: 30
  },
  gameWrapper: {
    display: "flex",
    flexDirection: "column"
  },
  gameField: {
    width: 300,
    height: 300,
    marginTop: 100,
    marginBottom: 30
  },
  cell: {
    display: "flex",
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
