import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F7",
    padding: 12,
    borderRadius: 12,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  arrowIcon: {
    width: 24,
    height: 24,
  },
  iconRow: {
    width: 28,
    height: 28,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 16,
    height: 16,
  },
  title: {
    marginLeft: 12,
    fontSize: 17,
    lineHeight: 20,
    color: "#1D1D22",
  },
});
