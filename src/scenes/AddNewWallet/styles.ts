import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContainer: {
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  button: {
    padding: 16,
    paddingLeft: 12,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: "#F5F5F7",
  },
  buttonIconRow: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F9BC45",
  },
  buttonRow: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },
  buttonTitle: {
    color: "#1D1D22",
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 18,
  },
  buttonText: {
    marginTop: 2,
    color: "#74758C",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
  },
  buttonArrowIcon: {
    width: 24,
    height: 24,
    backgroundColor: "red",
  },
  buttonOffset: {
    marginTop: 20
  }
});
