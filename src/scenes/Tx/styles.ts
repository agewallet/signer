import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F7",
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  group: {
    backgroundColor: "#FFFFFF",
    borderRadius: 26,
    paddingVertical: 8,
    shadowColor: "rgba(29, 29, 34, 0.04)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 5,
  },
  groupItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  groupItemIcon: {
    width: 24,
    height: 24,
    backgroundColor: "blue",
  },
  groupItemRow: {
    marginLeft: 16,
    flex: 1,
  },
  groupItemTitle: {
    color: "#B0B0BD",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
  },
  groupItemBottom: {
    marginTop: 4,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  groupItemValue: {
    color: "#1D1D22",
    flex: 1,
    fontSize: 17,
    lineHeight: 20,
    fontWeight: "600",
  },
  badge: {
    marginLeft: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: "#F5F5F7",
  },
  badgeText: {
    color: "#74758C",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
  },
  dividerLine: {
    width: "100%",
    height: 1,
    backgroundColor: "#F5F5F7",
  },
});
