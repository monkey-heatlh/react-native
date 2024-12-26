import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function WhiteBtn({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.PurpleBtn} onPress={onPress}>
      <Text style={styles.PurpleBtnLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  PurpleBtn: {
    paddingHorizontal: "auto",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#902BE9",
    width: "100%",
  },
  PurpleBtnLabel: {
    color: "#902BE9",
    fontSize: 16,
  },
});
