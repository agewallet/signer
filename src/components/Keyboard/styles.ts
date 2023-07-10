import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginHorizontal: -10,
    marginTop: -10,
    paddingHorizontal: 16,
  },
  button: {
    width: "33.33%",
    padding: 10,
  },
  keyRow: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  key: {
    color: "#1D1D22",
    fontSize: 28,
    lineHeight: 33,
  },
});
