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
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "700",
    color: "#1D1D22",
  },
  description: {
    marginTop: 8,
    fontSize: 17,
    lineHeight: 25,
    fontWeight: "400",
    color: "#74758C",
  },
  actions: {
    paddingHorizontal: 16,
    paddingBottom: plusOffset(0),
  },
});
