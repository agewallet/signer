import { StyleSheet } from "react-native";

// Utils
import { plusOffset } from "@utils/isIphoneX";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContainer: {
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  title: {
    color: "#1D1D22",
    fontSize: 28,
    lineHeight: 32,
    fontWeight: "700",
  },
  warning: {
    marginTop: 12,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#F5F5F7",
  },
  warningText: {
    color: "#74758C",
    fontSize: 15,
    lineHeight: 24,
    fontWeight: "500",
  },
  actions: {
    paddingHorizontal: 16,
    paddingBottom: plusOffset(0),
  },
  list: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginHorizontal: -4,
    marginTop: 8,
  },
  listItem: {
    padding: 4,
  },
  wordRow: {
    backgroundColor: "#F5F5F7",
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#EBEBEE",
  },
  word: {
    color: "#74758C",
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 20,
  },
});
