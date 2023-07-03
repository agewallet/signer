import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    backgroundColor: "green",
    borderRadius: 20,
  },
  row: {
    flex: 1,
    marginLeft: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    flex: 1,
    fontSize: 17,
    lineHeight: 20,
    fontWeight: "600",
    color: "#1D1D22",
  },
  symbol: {
    marginLeft: 24,
    fontSize: 15,
    lineHeight: 18,
    fontWeight: "500",
    textTransform: "uppercase",
    color: "#B0B0BD",
  },
});
