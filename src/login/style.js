import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "start",
    paddingTop: 100,
    padding: 20,
    gap: 80,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },

  inputWrap: {
    gap: 5,
  },
  label: {
    fontSize: 14,
  },
  inputContainer: {
    gap: 24,
  },
  errorMessage: {
    color: "#FF0000",
    fontSize: 14,
    marginLeft: "auto",
  },
});
