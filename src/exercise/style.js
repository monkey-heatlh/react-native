import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: 500,
  },
  selectWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "left",
    gap: 20,
  },
});
