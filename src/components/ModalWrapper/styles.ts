import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 55,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEE",
  },
  button: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 17,
    lineHeight: 20,
    fontWeight: "500",
    color: "#1D1D22",
  },
});
