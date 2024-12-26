import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  Container: {
    marginTop: 24,
    flex: 1,
    justifyContent: "start",
    alignItems: "left",
    padding: 20,
    backgroundColor: "#FFFFFF",
    gap: 20,
  },
  header: {
    flex: 0.1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 40,
  },
  icon: {
    width: 24,
    height: 24,
  },
  smallTitle: {
    fontSize: 32,
    fontWeight: "bold",
  },
  bigTitle: {
    fontSize: 36,
    fontWeight: "bold",
  },
  textWrap: {
    flexDirection: "row",
    gap: 2,
    alignItems: "flex-end",
  },
  highlight: {
    fontSize: 24,
    fontWeight: 500,
  },
  without: {
    fontSize: 20,
    fontWeight: 500,
  },
  miniContainer: {
    justifyContent: "space-between",
    backgroundColor: "#F7F7F7",
    borderRadius: 20,
    padding: 20,
    gap: 20,
  },
  moment: {
    color: "#D9d9d9",
    fontWeight: 700,
    fontSize: 28,
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#c4c4c4",
  },
});
