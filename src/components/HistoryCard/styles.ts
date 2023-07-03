import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: "blue",
  },
  row: {
    flex: 1,
    marginLeft: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowLeft: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    lineHeight: 20,
    fontWeight: "500",
    color: "#1D1D22",
  },
  value: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    color: "#B0B0BD",
  },
  rowRight: {
    flex: 1,
    alignItems: "flex-end",
    marginLeft: 8,
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  amount: {
    fontSize: 17,
    lineHeight: 20,
    fontWeight: "600",
    color: "#1D1D22",
  },
  symbol: {
    marginLeft: 2,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    color: "#1D1D22",
    textTransform: "uppercase",
  },
  estimated: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    color: "#B0B0BD",
  },
});
