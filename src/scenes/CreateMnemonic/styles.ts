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
  word: {
    marginBottom: 12,
    color: "#1D1D22",
    fontSize: 15,
    lineHeight: 25,
    fontWeight: "600",
  },
});
