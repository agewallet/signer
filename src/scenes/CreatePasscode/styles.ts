import { StyleSheet } from "react-native";

// Utils
import { plusOffset } from "@utils/isIphoneX";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingBottom: plusOffset(0),
  },
  row: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#1D1D22",
    fontSize: 17,
    fontWeight: "400",
    lineHeight: 20,
  },
  dots: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#EBEBEE",
    marginHorizontal: 12,
  },
  dotActive: {
    backgroundColor: "#3FBB7D",
  },
});
