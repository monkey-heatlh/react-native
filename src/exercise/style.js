import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    padding: 25,
    gap: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
  },
  titleWrap: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: 10,
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
