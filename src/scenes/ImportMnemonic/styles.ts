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
  actions: {
    paddingHorizontal: 16,
    paddingBottom: plusOffset(0),
  },
});
